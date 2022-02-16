import styled from 'styled-components';

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
