import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Wrapper } from '../../Root/Root.styles';
import { Wrapper, StyledNav, StyledLink } from './Nav.styles';
import logo from './../../assets/icons/logo.svg';
import hamburgerIcon from './../../assets/icons/icon-hamburger.svg';

const Nav = () => {
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    setResponsive((prev) => !prev);
  };

  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="Arch logo" />
      </Link>
      <a className="nav__icon" onClick={toggleResponsive}>
        <img src={hamburgerIcon} alt="Hamburger icon" />
      </a>
      <StyledNav>
        <div className={responsive ? 'nav responsive' : 'nav'}>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </div>
      </StyledNav>
    </Wrapper>
  );
};

export default Nav;
