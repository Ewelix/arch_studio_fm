import styled from 'styled-components';

export const Wrapper = styled.div`
  @media(${({theme}) => theme.device.m}) {
    position: relative;
    padding-bottom: 15%;
  }

  @media(${({theme}) => theme.device.xl}) {
    display: flex;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-height: 300px;
  overflow: hidden;

  @media(${({theme}) => theme.device.m}) {
    max-height: unset;
    overflow: hidden;
  }

  img {
    position: relative;
    width: 100vw;
    top: 0;
    left: 0;
    z-index:1;
    display: block;

    @media(${({theme}) => theme.device.m}) {
      width: 100%;
      max-width: 635px;
    }
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  z-index: 3;
  max-width: 92%;
  padding: 20px 0 20px 30px;
  margin-top: -50px;
  background: ${({theme}) => theme.colors.white};

  @media(${({theme}) => theme.device.m}) {
    position: absolute;
    top: 35%;
    width: 515px;
    margin-left: 60px;
    padding-top: 50px;
    padding-left: 8%;

    p {
      max-width: 430px;
    }
  }

  @media(${({theme}) => theme.device.xl}) {
    position: relative;
    align-self: end;
    margin-top: 0;
    margin-left: -180px;
    padding-top: 60px;
    padding-left: 12%;
  }

  h2 {
    @media(${({theme}) => theme.device.m}) {
      position: absolute;
      top: -20%;
      right: 0;
    }

    @media(${({theme}) => theme.device.xl}) {
      top: -25%;
      left: -4%;
    }
  }

  p {
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.fontSize.xxs};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    line-height: 25px;
  }
`