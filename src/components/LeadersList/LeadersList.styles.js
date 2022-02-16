import styled from 'styled-components';

export const StyledLeadersList = styled.div`
  padding: 0 20px;

  @media (${({ theme }) => theme.device.m}) {
    padding: 0;
  }

  @media (${({ theme }) => theme.device.l}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h3 {
    min-width: 270px;

    @media (${({ theme }) => theme.device.m}) {
      margin-top: 0;
    }
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;

  @media (${({ theme }) => theme.device.s}) {
    justify-content: space-around;
    gap: 20px;
  }
`;
