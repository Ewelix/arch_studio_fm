import styled from 'styled-components';

export const StyledListItem = styled.div`
  padding: 15px 0;

  @media(${({theme}) => theme.device.m}) {
    width: 50%;

    img {
      max-width: 280px;
    }
  }

  @media(${({theme}) => theme.device.xl}) {
    width: auto;
  }
  
  p {
    line-height: 15px;
  }
`;

export const StyledItemTitle = styled.p`
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: ${({theme}) => theme.fontSize.s};
`;

export const StyledItemSubtitle = styled.p`
  font-size: ${({theme}) => theme.fontSize.xs};
  color: ${({theme}) => theme.colors.darkGray};
`;