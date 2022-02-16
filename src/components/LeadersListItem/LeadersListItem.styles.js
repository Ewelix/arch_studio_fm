import styled from 'styled-components';

import { StyledSocialMedia } from '../SocialMediaLinks/SocialMediaLinks.styles';

export const ImageContainer = styled.div`
  @media (${({ theme }) => theme.device.m}) {
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

export const StyledListItem = styled.div`
  padding: 15px 0;

  @media (${({ theme }) => theme.device.s}) {
    flex-basis: calc(50% - 20px);
    position: relative;
    padding: 0;

    &:hover ${StyledSocialMedia} {
      opacity: 1;
    }

    &:hover ${ImageContainer}::before {
      opacity: 1;
    }
  }

  p {
    line-height: 15px;
  }
`;

export const StyledItemTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledItemSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.darkGray};
`;
