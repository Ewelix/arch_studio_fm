import styled from 'styled-components';
import imgS from '../../assets/mobile/image-small-team.jpg';
import imgM from '../../assets/tablet/image-small-team.jpg';
import imgL from '../../assets/desktop/image-small-team.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 50em;
  background-image: url(${imgS});
  background-repeat: no-repeat;

  @media(${({theme}) => theme.device.m}) {
    background-image: url(${imgM});
  }

  @media(${({theme}) => theme.device.xl}) {
    background-image: url(${imgL});
  }
`