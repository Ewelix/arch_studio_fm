import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 5px 20px;

  @media(${({theme}) => theme.device.l}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    h3 {
      margin: 0;
    }
    
    .map-img {
      flex-basis: 100%;
      margin: 7% auto 0;
      
    }
  }
`