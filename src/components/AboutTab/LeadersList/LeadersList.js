import React from 'react';
import { pageTextContent } from '../../../data/pageTextContent';
import LeadersListItem from '../LeadersListItem/LeadersListItem';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { StyledLeadersList } from './LeadersList.styles';

const LeadersList = () => {
  const { leadersList } = pageTextContent;

  return (
    <StyledLeadersList>
      <SectionTitle title="The Leaders"/>
      {leadersList.map(({ name, position }, i) => {
        return (
          <LeadersListItem name={name} position={position} i={i} />
        );
      })}
    </StyledLeadersList>
  )
};

export default LeadersList;
