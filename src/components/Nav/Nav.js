import React, { useState } from 'react';

import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import { ReactComponent as CloseIcon } from './../../assets/icons/icon-close.svg';
import { ReactComponent as HamburgerIcon } from './../../assets/icons/icon-hamburger.svg';
import { MenuToggleButton, Navigation, Wrapper } from './Nav.styles';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <Wrapper isOpen={isOpen}>
      <Logo />
      <MenuToggleButton onClick={handleClick}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MenuToggleButton>

      <Navigation isOpen={isOpen}>
        <MenuLinks handleClick={handleClick} />
      </Navigation>
    </Wrapper>
  );
};

export default Nav;
