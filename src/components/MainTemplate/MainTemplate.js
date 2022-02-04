import React from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import Logo from '../Logo/Logo';

const MainTemplate = ({ children }) => {
  const checkMobileScreen = useCheckMobileScreen();
  return (
    <>
      <div>
        <Logo to='/'/>
        {checkMobileScreen ? <Nav /> : <Menu/>}
      </div>
      {children}
    </>
  );
};

export default MainTemplate;
