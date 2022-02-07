import React from 'react';
import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import LinkButton from '../LinkButton/LinkButton';
import { Wrapper, LogoWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo/>
      </LogoWrapper>
      <MenuLinks/>
      <LinkButton to="/portfolio" text="See Our Portfolio"/>
    </Wrapper>
  );
};

export default Footer;