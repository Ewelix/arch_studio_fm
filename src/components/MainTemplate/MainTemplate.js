import React from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import Footer from '../Footer/Footer';
import NavSticker from '../NavSticker/NavSticker';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const checkMobileScreen = useCheckMobileScreen();
  return (
    <Wrapper>
      <div>
        {checkMobileScreen ? <Nav /> : (
          <>
            {/*<NavSticker/>*/}
            <Menu/>
          </>
        )}
      </div>
      {children}
      <Footer/>
    </Wrapper>
  );
};

export default MainTemplate;
