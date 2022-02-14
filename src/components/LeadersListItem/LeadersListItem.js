import React from 'react';
import { StyledListItem, StyledItemTitle, StyledItemSubtitle, ImageContainer} from './LeadersListItem.styles';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
// import { ImageWrapper } from '../../components/IntroSection/IntroSection.styles';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../assets/avatars', false, /\.(png|jpe?g|svg)$/));

const LeadersListItem = ({name, position, i}) => {
  return (
    <StyledListItem>
      <ImageContainer>
        <img src={images[i]} alt='Leader portrait' />
      </ImageContainer>
      <StyledItemTitle>{name}</StyledItemTitle>
      <StyledItemSubtitle>{position}</StyledItemSubtitle>
      <SocialMediaLinks/>
    </StyledListItem>
  );
};

export default LeadersListItem;