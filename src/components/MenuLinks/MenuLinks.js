import React from 'react';

import { StyledLink } from './MenuLinks.styles';

const MenuLinks = ({ handleClick }) => {
  return (
    <>
      <StyledLink to="/portfolio" onClick={handleClick}>
        Portfolio
      </StyledLink>
      <StyledLink to="/about" onClick={handleClick}>
        About Us
      </StyledLink>
      <StyledLink to="/contact" onClick={handleClick}>
        Contact
      </StyledLink>
    </>
  );
};

export default MenuLinks;
