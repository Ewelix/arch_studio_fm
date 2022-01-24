import React from 'react';
import { pageTextContent } from '../../../data/pageTextContent';
import LeadersListItem from '../LeadersListItem/LeadersListItem';



const LeadersList = () => {
  const { leadersList } = pageTextContent;

  return (
    <>
      {leadersList.map(({ name, position }, i) => {
        return (
          <LeadersListItem name={name} position={position} i={i} />
        );
      })}
    </>
  )
};

export default LeadersList;
