import React from 'react';

import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

import { Wrapper } from './MainTemplate.styles';

const MainTemplate = () => {
  const checkMobileScreen = useCheckMobileScreen();

  return (
    <Wrapper>
      {checkMobileScreen ? <Nav /> : <Menu />}
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
