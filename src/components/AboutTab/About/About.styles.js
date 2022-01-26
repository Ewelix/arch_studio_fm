import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;

  ::before {
    position: absolute;
    bottom: -1px;
    z-index: 3;
    width: 90%;
    height: 45px;
    background-color: ${({theme}) => theme.colors.white};
    content: "";
  }
  
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(0, 0, 0, 40%);
  }

  .hero-img {
    position: relative;
    width: 100vw;
    top: 0;
    left: 0;
    z-index:1;
    display: block;
  }
`;

export const SectionWrapper = styled.section`
  padding: 5px 20px;
  
  @media(${({theme}) => theme.device.l}) {
    display: flex;
  }
`;

export const SectionContainer = styled.div`
  p {
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.fontSize.xxs};
    line-height: 25px;
  }
`;
