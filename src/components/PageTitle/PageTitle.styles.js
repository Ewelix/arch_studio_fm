import styled from 'styled-components';

export const StyledTitle = styled.h2`
  display: none;

  @media(${({theme}) => theme.device.s}) {
    display: block;
    margin: 0;
    color: ${({theme}) => theme.colors.lightGray};
    font-size: ${({theme}) => theme.fontSize.xxl};
  }

  @media(${({theme}) => theme.device.xl}) {
    font-size: ${({theme}) => theme.fontSize.xxxl};
  }
`