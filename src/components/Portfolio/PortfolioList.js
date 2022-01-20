import React from 'react';
import { portfolio } from '../../data/portfolio';
import PortfolioListItem from './PortfolioListItem/PortfolioListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #e09c9c;
  padding: 30px 40px;
  border: 2px solid #000;
  box-shadow: 1px 1px 1px #61dafb;
`;

// przedrostek Styled dla generycznych elementow

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PortfolioList = () => {
  return (
    <Wrapper>
      <StyledList>
        {portfolio.map((userData, i) => (
          <PortfolioListItem userData={userData} key={i} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default PortfolioList;
