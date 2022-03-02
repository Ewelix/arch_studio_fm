import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (${({ theme }) => theme.device.m}) {
    position: relative;
    margin-bottom: 15%;
  }

  @media (${({ theme }) => theme.device.xl}) {
    display: flex;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-height: 300px;
  overflow: hidden;

  @media (${({ theme }) => theme.device.m}) {
    max-height: unset;
    overflow: hidden;
  }

  img {
    position: relative;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;

    @media (${({ theme }) => theme.device.m}) {
      max-width: 635px;
      margin: 0 auto;
      height: 720px;
    }
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  z-index: 3;
  max-width: 92%;
  padding: 20px 0 20px 30px;
  margin-top: -50px;
  background: ${({ theme }) => theme.colors.white};

  @media (${({ theme }) => theme.device.m}) {
    position: absolute;
    right: 30px;
    bottom: -1px;
    width: 515px;
    padding: 50px 0 0 50px;
  }

  @media (${({ theme }) => theme.device.l}) {
    right: 13%;
  }

  @media (${({ theme }) => theme.device.xl}) {
    position: relative;
    right: 0;
    flex-grow: 1;
    width: 600px;
    align-self: end;
    margin-top: 0;
    margin-left: -180px;
    padding-top: 60px;
    padding-left: 12%;
  }

  h2 {
    position: absolute;
    top: -20%;
    right: 0;

    @media (${({ theme }) => theme.device.xl}) {
      top: -31%;
      right: 0;
    }
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 25px;
  }
`;
