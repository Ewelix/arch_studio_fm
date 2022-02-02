import styled from 'styled-components';
import imgS from '../../assets/mobile/image-small-team.jpg';
import imgM from '../../assets/tablet/image-small-team.jpg';
import imgL from '../../assets/desktop/image-small-team.jpg';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  background-image: url(${imgS});
  background-repeat: no-repeat;
  background-size: cover;

  @media(${({theme}) => theme.device.m}) {
    background-image: url(${imgM});
    margin-bottom: ${({theme}) => theme.sectionMargin};
  }

  @media(${({theme}) => theme.device.xl}) {
    background-image: url(${imgL});
  }
`;

export const SectionContainer = styled.div`
  z-index: 1;
  
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .50);
  }
  
  h3 {
    margin-top: 0;
    color: ${({theme}) => theme.colors.white};
  }
`;

export const SectionContent = styled.div`
  position: absolute;
  z-index: 2;
  top: calc((560px - 250px) / 2);
  left: 10%;
  
  @media(${({theme}) => theme.device.xl}) {
    left: 17.5%;
  }
`;