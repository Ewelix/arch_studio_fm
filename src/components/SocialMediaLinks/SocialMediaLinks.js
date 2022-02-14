import React from 'react';
import { ReactComponent as TwitterIcon } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/icon-linkedin.svg';
import { StyledSocialMedia } from './SocialMediaLinks.styles';

const SocialMediaLinks = () => {
  return (
    <StyledSocialMedia>
      <LinkedinIcon alt="Linkedin" />
      <TwitterIcon alt="Twitter" />
    </StyledSocialMedia>
  );
};

export default SocialMediaLinks;
