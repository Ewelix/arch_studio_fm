import React from 'react';
import { useLocation } from 'react-router-dom';

const NavSticker = () => {
  const { pathname } = useLocation();

  return (
    <>
      {(() => {
        switch (pathname) {
          case "/":
            return <span>Home</span>
          case "/about":
            return <span>About us</span>
          case "localization":
          default:
            return <span>{pathname.split('/').join('')}</span>
        }
      })()}
    </>
  );
};

export default NavSticker;