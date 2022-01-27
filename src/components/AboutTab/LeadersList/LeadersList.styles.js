import styled from 'styled-components';

export const StyledLeadersList = styled.div`
  @media(${({theme}) => theme.device.xl}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    h3 {
      flex-basis: 50%;
    }
  }
`;

export const SectionWrapper = styled.div`
  @media(${({theme}) => theme.device.m}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
  }

  @media(${({theme}) => theme.device.xl}) {
    justify-content: end;
    gap: 20px;
    max-width: 730px;
  }
`;