import styled from 'styled-components';

export const StyledButton = styled.a`
  display: flex;
  align-items: center;
  line-height: 35px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  cursor: pointer;
  
  img {
    margin-left: 30px;
  }
`;