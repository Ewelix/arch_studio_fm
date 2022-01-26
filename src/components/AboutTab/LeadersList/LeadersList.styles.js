import styled from 'styled-components';

export const StyledLeadersList = styled.div`
  //padding: 20px;
  
  @media(${({theme}) => theme.device.l}) {
    display: flex;
    //flex-wrap: wrap;
    //justify-content: center;
    
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

  @media(${({theme}) => theme.device.l}) {
    
  }
`;

export const SectionContainer = styled.div`
`