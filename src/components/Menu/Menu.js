import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import { StyledMenu } from './Menu.styles';
import Logo from '../Logo/Logo';
import { Wrapper } from '../../Root/Root.styles';

const Menu = () => {
  return (
    <Wrapper>
      <StyledMenu>
        <Logo />
        <MenuLinks />
      </StyledMenu>
    </Wrapper>
  );
};

export default Menu;
