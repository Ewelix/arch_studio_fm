import React from 'react';

import LinkButton from '../LinkButton/LinkButton';
import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import { Wrapper, LogoWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MenuLinks />
      <LinkButton to="/portfolio" text="See Our Portfolio" />
    </Wrapper>
  );
};

export default Footer;
