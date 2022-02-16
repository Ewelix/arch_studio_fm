import React from 'react';

import { pageTextContent } from '../../data/pageTextContent';
import LinkButton from '../LinkButton/LinkButton';
import { StyledList } from '../PortfolioList/PortfolioList.styles';
import PortfolioListItem from '../PortfolioListItem/PortfolioListItem';
import SectionTitle from '../SectionTitle/SectionTitle';
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
