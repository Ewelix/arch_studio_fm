import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import { StyledMenu } from './Menu.styles';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { Logo } from '../Nav/Nav.styles';

const Menu = () => {
  return (
    <StyledMenu>
      <Logo to="/">
        <LogoIcon />
      </Logo>
      <MenuLinks/>
    </StyledMenu>
  );
};

export default Menu;