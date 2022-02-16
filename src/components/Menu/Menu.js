import React from 'react';

import Logo from '../Logo/Logo';
import { Wrapper } from '../MainTemplate/MainTemplate.styles';
import MenuLinks from '../MenuLinks/MenuLinks';
import NavSticker from '../NavSticker/NavSticker';
import { StyledMenu } from './Menu.styles';

const Menu = () => {
  return (
    <Wrapper>
      <NavSticker />
      <StyledMenu>
        <Logo />
        <MenuLinks />
      </StyledMenu>
    </Wrapper>
  );
};

export default Menu;
