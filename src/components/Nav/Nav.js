import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Wrapper } from '../../Root/Root.styles';
import { Wrapper } from './Nav.styles';
import logo from './../../assets/icons/logo.svg';
import hamburgerIcon from './../../assets/icons/icon-hamburger.svg'

const Nav = () => {
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    //take current value of responsive and flip it
    setResponsive((prev) => !prev);
  };

  return (
    <Wrapper>
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="Arch logo" />
        </Link>
        <div className={responsive ? 'nav responsive' : 'nav'}>
          <Link to="/portfolio" className="nav__link">
            Portfolio
          </Link>
          <Link to="/about" className="nav__link">
            About Us
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
          <a className="nav__icon" onClick={toggleResponsive}>
            <img src={hamburgerIcon} alt="Hamburger icon"/>
          </a>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Nav;
