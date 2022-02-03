import React, { useState } from 'react';
import {
  Wrapper,
  Navigation,
  StyledLink,
  MenuToggleButton,
  Logo,
} from './Nav.styles';
import { ReactComponent as LogoIcon } from './../../assets/icons/logo.svg';
import { ReactComponent as HamburgerIcon } from './../../assets/icons/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from './../../assets/icons/icon-close.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Logo to="/">
        <LogoIcon />
      </Logo>
      <MenuToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MenuToggleButton>

      <Navigation isOpen={isOpen}>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Navigation>
    </Wrapper>
  );
};

export default Nav;
