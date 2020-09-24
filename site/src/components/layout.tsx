import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import styled from 'styled-components';

const Main = styled.main({
  display: "flex",
  flexDirection: "column",
});

const Footer = styled.footer({
  marginTop: 25,
  textAlign: "center",
})

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
        <Main>
          {children}
        </Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    </>
  );
};

export default Layout;
