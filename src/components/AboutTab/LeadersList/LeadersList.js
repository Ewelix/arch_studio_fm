import React from 'react';
import { pageTextContent } from '../../../data/pageTextContent';
import LeadersListItem from '../LeadersListItem/LeadersListItem';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { StyledLeadersList, SectionWrapper } from './LeadersList.styles';

const LeadersList = () => {
  const { leadersList } = pageTextContent;

  return (
    <StyledLeadersList>
      <SectionTitle title={`The \n Leaders`} />
        <SectionWrapper>
        {leadersList.map(({ name, position }, i) => {
          return (
            <LeadersListItem name={name} position={position} i={i} />
          );
        })}
        </SectionWrapper>
    </StyledLeadersList>
  )
};

export default LeadersList;
