import React from 'react';
import { pageTextContent } from '../../../data/pageTextContent';
import PortfolioListItem from '../PortfolioListItem/PortfolioListItem';
import { StyledList } from './PortfolioList.styles';

const PortfolioList = () => {
  const { projects } = pageTextContent;
  return (
    <StyledList>
      {projects.map((userData) => (
        <PortfolioListItem userData={userData} key={userData.id} />
      ))}
    </StyledList>
  );
};

export default PortfolioList;
