import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import { StyledMenu } from './Menu.styles';
import Logo from '../Logo/Logo';
import { Wrapper } from '../MainTemplate/MainTemplate.styles';
import NavSticker from '../NavSticker/NavSticker';

const Menu = () => {
  return (
    <Wrapper >
      <NavSticker/>
      <StyledMenu>
        <Logo />
        <MenuLinks />
      </StyledMenu>
    </Wrapper>
  );
};

export default Menu;
