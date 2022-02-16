import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
