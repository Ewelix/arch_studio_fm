import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 575px;
  margin: 0 auto;

  @media(${({theme}) => theme.device.l}) {
    max-width: 1024px;
  }

  @media(${({theme}) => theme.device.xl}) {
    max-width: 1100px;
  }
`