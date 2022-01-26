import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  font-size: ${({theme}) => theme.fontSize.xxs};
  line-height: 35px;
  
  @media(${({theme}) => theme.device.s}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media(${({theme}) => theme.device.l}) {
    display: block;
  }
  
  h6 {
    margin: 0;
    color: ${({theme}) => theme.colors.darkGray};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    font-size: ${({theme}) => theme.fontSize.xxs};
    
    @media(${({theme}) => theme.device.s}) {
      flex-basis: 100%;
    }
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  color: ${({theme}) => theme.colors.darkGray};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  list-style: none;
`;