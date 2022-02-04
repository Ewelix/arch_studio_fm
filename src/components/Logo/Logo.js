import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link>
      <LogoIcon />
    </Link>
  );
};

export default Logo;