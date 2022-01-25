import React from 'react';
import { pageTextContent } from '../../data/pageTextContent';
import PortfolioListItem from './PortfolioListItem/PortfolioListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 20px;
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
        {pageTextContent.projects.map((userData, i) => (
          <PortfolioListItem userData={userData} key={i} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default PortfolioList;
