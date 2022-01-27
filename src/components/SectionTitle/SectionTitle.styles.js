import styled from 'styled-components';

export const StyledSectionTitle = styled.h3`
  font-size: ${({theme}) => theme.fontSize.m};
  font-weight: ${({theme}) => theme.fontWeight.bold};

  @media(${({theme}) => theme.device.m}) {
    font-size: ${({theme}) => theme.fontSize.l};
  }
`