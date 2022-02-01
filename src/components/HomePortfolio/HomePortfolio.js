import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PortfolioListItem from '../Portfolio/PortfolioListItem/PortfolioListItem';
import { pageTextContent } from '../../data/pageTextContent';
import { StyledList } from '../Portfolio/PortfolioList/PortfolioList.styles';

const HomePortfolio = () => {
  const { projects } = pageTextContent;

  return (
    <>
      <SectionTitle title="Featured"/>
      <StyledList>
        <PortfolioListItem userData={projects[3]}/>
        <PortfolioListItem userData={projects[5]}/>
        <PortfolioListItem userData={projects[4]}/>
      </StyledList>
    </>
  );
};

export default HomePortfolio;