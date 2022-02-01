import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PortfolioListItem from '../Portfolio/PortfolioListItem/PortfolioListItem';
import LinkButton from '../LinkButton/LinkButton';
import { pageTextContent } from '../../data/pageTextContent';
import { StyledList } from '../Portfolio/PortfolioList/PortfolioList.styles';
import { Wrapper } from './HomePortfolio.styles';

const HomePortfolio = () => {
  const { projects } = pageTextContent;

  return (
    <Wrapper>
      <SectionTitle title="Featured" />
      <StyledList>
        <PortfolioListItem userData={projects[3]} />
        <PortfolioListItem userData={projects[5]} />
        <PortfolioListItem userData={projects[4]} />
      </StyledList>
      <LinkButton text="See All" to="/portfolio" />
    </Wrapper>
  );
};

export default HomePortfolio;
