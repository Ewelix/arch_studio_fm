import React from 'react';

import { Link } from 'react-scroll';

import arrow from '../../assets/icons/icon-arrow.svg';
import { StyledButton } from './MapButton.styles';

const MapButton = (props) => {
  return (
    <Link to="mapElement" smooth duration={300}>
      <StyledButton {...props}>
        <span>View on Map</span>
        <img src={arrow} alt="Arrow icon" />
      </StyledButton>
    </Link>
  );
};

export default MapButton;
