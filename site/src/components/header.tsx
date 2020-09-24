import React from 'react';
import styled from "styled-components"
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

const HeaderContainer = styled.header({
  background: 'black',
  margin: "0 auto",
  maxWidth: 1000,
  padding: '1.45rem 1.0875rem',
  boxSizing: "border-box",
  borderRadius: 10,
})

const HeaderTitle = styled.h1({
  margin: 0,
  fontSize: "1.5em",
  "@media (min-width: 640px)": {
    fontSize: "2em",
  },
})

const Header: React.FC<HeaderProps> = ({
  siteTitle,
}) => (
    <HeaderContainer>
      <HeaderTitle style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </HeaderTitle>
    </HeaderContainer>
  )

export default Header;
