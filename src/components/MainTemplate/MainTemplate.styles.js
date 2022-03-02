import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 575px;
  margin: 0 auto;
  overflow: hidden;

  @media (${({ theme }) => theme.device.m}) {
    max-width: 700px;
    overflow: visible;
    position: relative;
  }

  @media (${({ theme }) => theme.device.l}) {
    max-width: 900px;
  }

  @media (${({ theme }) => theme.device.xl}) {
    max-width: 1100px;
  }
`;

export const ContentWrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  //div.transition-group {
  //  position: relative;
  //}
  //
  //section.route-section {
  //  position: absolute;
  //  width: 100%;
  //  top: 0;
  //  left: 0;
  //}
`;
