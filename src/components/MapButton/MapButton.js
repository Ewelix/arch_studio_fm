import React from 'react';
import { StyledButton } from './MapButton.styles';
import arrow from '../../assets/icons/icon-arrow.svg';

const MapButton = () => {
  return (
    <StyledButton>
      <span>View on Map</span>
      <img src={arrow} alt='Arrow icon' />
    </StyledButton>
  );
};

export default MapButton;