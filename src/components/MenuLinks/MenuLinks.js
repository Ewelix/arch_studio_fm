import React from 'react';
import { StyledLink } from './MenuLinks.styles';

const MenuLinks = () => {
  return (
    <>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </>
  );
};

export default MenuLinks;