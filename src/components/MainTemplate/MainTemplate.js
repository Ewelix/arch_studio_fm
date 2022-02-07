import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import Footer from '../Footer/Footer';

const Wrapper = styled.div`
  @media(${({theme}) => theme.device.xl}) {
    max-width: 1100px;
    margin: 0 auto;
  }
`

const MainTemplate = ({ children }) => {
  const checkMobileScreen = useCheckMobileScreen();
  return (
    <Wrapper>
      <div>
        {checkMobileScreen ? <Nav /> : <Menu/>}
      </div>
      {children}
      <Footer/>
    </Wrapper>
  );
};

export default MainTemplate;
