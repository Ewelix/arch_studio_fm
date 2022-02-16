import React, { useState } from 'react';

import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import { ReactComponent as CloseIcon } from './../../assets/icons/icon-close.svg';
import { ReactComponent as HamburgerIcon } from './../../assets/icons/icon-hamburger.svg';
import { MenuToggleButton, Navigation, Wrapper } from './Nav.styles';

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
