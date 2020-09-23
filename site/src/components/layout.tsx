import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title ?? 'No title'} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1000,
          padding: '0 1.0875rem 1.45rem',
          display: "block",
        }}
      >
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          {children}
        </main>
        <footer style={{
          marginTop: 20,
          textAlign: "center",
        }}>
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
