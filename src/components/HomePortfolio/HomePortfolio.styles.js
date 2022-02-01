import styled from 'styled-components';
import { StyledButton } from '../LinkButton/LinkButton.styles';
import { StyledList } from '../Portfolio/PortfolioList/PortfolioList.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 30px;

  @media(${({theme}) => theme.device.m}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  h3 {
    margin: 10px 0 10px;
    padding: 0 20px;

    @media(${({theme}) => theme.device.m}) {
      flex-basis: 50%;
      padding: 0;
    }
  }
  
  ${StyledButton} {
    justify-content: center;
    width: auto;
    margin: 0 20px 20px;

    @media(${({theme}) => theme.device.m}) {
      order: 2;
      flex-basis: 30%;
      margin: 0;
    }
  }
  
  ${StyledList} {
    @media(${({theme}) => theme.device.m}) {
      order: 3;
      flex-basis: 100%;
      padding: 0;
    }
  }
`