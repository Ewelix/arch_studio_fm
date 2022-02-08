import React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper, NavDecoration } from './NavSticker.styles';

const NavSticker = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <NavDecoration />
      {(() => {
        switch (pathname) {
          case '/':
            return <span>Home</span>;
          case '/about':
            return <span>About us</span>;
          case 'localization':
          default:
            return <span>{pathname.split('/').join('')}</span>;
        }
      })()}
    </Wrapper>
  );
};

export default NavSticker;
