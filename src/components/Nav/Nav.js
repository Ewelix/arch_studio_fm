import React, { useState } from 'react';
import {
  Wrapper,
  Navigation,
  StyledLink,
  MenuToggleButton,
} from './Nav.styles';
import { ReactComponent as HamburgerIcon } from './../../assets/icons/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from './../../assets/icons/icon-close.svg';
import MenuLinks from '../MenuLinks/MenuLinks';
import Logo from '../Logo/Logo';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Logo />
      <MenuToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MenuToggleButton>

      <Navigation isOpen={isOpen}>
        <MenuLinks />
      </Navigation>
    </Wrapper>
  );
};

export default Nav;
