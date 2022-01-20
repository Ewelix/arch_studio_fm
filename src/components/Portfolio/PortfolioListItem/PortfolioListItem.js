import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  background-image: url('../../../assets/desktop/image-hero-seraph.jpg');
  width: 200px;
  height: 200px;
`;

const StyledButton = styled.button`
  width: 35px;
  height: 25px;
  color: ${({theme}) => theme.colors.lightGray};
  background-color: ${({ isSecondary }) =>
    isSecondary ? '#e7e844' : '#c8c7d6'};
  //jesli nie przekazano wartosic do BR to daj mu 50px
  border-radius: ${({ isSquare }) => (isSquare ? '0' : '50px')};
`;

const PortfolioListItem = ({ userData: { name, date } }) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <p>{date}</p>
      <StyledButton>X</StyledButton>
      <StyledButton isSecondary isSquare="20px">
        XX
      </StyledButton>
    </Wrapper>
  );
};

PortfolioListItem.PropTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default PortfolioListItem;
