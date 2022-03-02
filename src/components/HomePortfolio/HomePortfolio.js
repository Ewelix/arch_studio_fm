import React from 'react';
import { Link } from 'react-router-dom';

import { pageTextContent } from '../../data/pageTextContent';
import LinkButton from '../LinkButton/LinkButton';
import { StyledList } from '../PortfolioList/PortfolioList.styles';
import PortfolioListItem from '../PortfolioListItem/PortfolioListItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Wrapper } from './HomePortfolio.styles';

const HomePortfolio = () => {
  const { projects } = pageTextContent;
  const projectIndexes = [3, 5, 4];

  return (
    <Wrapper>
      <SectionTitle title="Featured" />
      <StyledList>
        {projectIndexes.map((index) => (
          <Link to="/portfolio" className="project-link">
            <PortfolioListItem userData={projects[index]} key={index} />
          </Link>
        ))}
      </StyledList>
      <LinkButton text="See All" to="/portfolio" />
    </Wrapper>
  );
};

export default HomePortfolio;
