import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 5px 30px;

  @media (${({ theme }) => theme.device.m}) {
    padding: 0 0 15% 0;
  }

  @media (${({ theme }) => theme.device.l}) {
    display: flex;
    justify-content: space-between;
  }

  .heritage-img {
    display: none;

    @media (${({ theme }) => theme.device.l}) {
      display: block;
      max-width: 45%;
    }
  }
`;

export const SectionContainer = styled.div`
  @media (${({ theme }) => theme.device.l}) {
    max-width: 440px;
  }
`;
