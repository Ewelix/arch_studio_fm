import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/icon-arrow.svg';
import { StyledButton } from './LinkButton.styles';

const LinkButton = ({...props}) => {
  return (
    <StyledButton {...props}>
      <span>{props.text}</span>
      <Arrow/>
    </StyledButton>
  );
};

export default LinkButton;
