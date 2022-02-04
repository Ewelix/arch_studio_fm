import React from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { Logo } from '../Nav/Nav.styles';

const MainTemplate = ({ children }) => {
  return (
    <>
      {/*<Nav />*/}
      <Menu/>
      {children}
    </>
  );
};

export default MainTemplate;
