import React from 'react';
import { StyledListItem, StyledItemTitle, StyledItemSubtitle} from './LeadersListItem.styles';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../assets/avatars', false, /\.(png|jpe?g|svg)$/));

const LeadersListItem = ({name, position, i}) => {
  return (
    <StyledListItem>
      <img src={images[i]} alt='Leader portrait' />
      <StyledItemTitle>{name}</StyledItemTitle>
      <StyledItemSubtitle>{position}</StyledItemSubtitle>
      <SocialMediaLinks/>
    </StyledListItem>
  );
};

export default LeadersListItem;