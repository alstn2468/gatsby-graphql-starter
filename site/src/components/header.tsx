import React from 'react';
import styled from "styled-components"

interface HeaderProps {
  siteTitle: string;
}

const HeaderContainer = styled.header({
  background: 'black',
  margin: "0 auto",
  maxWidth: 1000,
  padding: '0.8rem 1.0875rem',
  boxSizing: "border-box",
  borderRadius: 10,
})

const HeaderTitle = styled.h1({
  margin: 0,
  fontSize: "1.5em",
  color: "#ffffff",
  "@media (min-width: 640px)": {
    fontSize: "2em",
  },
})

const Header: React.FC<HeaderProps> = ({
  siteTitle,
}) => (
    <HeaderContainer>
      <HeaderTitle>
        {siteTitle}
      </HeaderTitle>
    </HeaderContainer>
  )

export default Header;
