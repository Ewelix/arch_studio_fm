import styled from 'styled-components';

export const FormWrapper = styled.div`
  @media(${({theme}) => theme.device.m}) {
    flex-grow: 1;
  }
  
  button {
    justify-content: center;
    width: 80px;
    height: 80px;
    margin-left: auto;
    padding: 0;
    border: none;
    cursor: pointer;
  }
  
  span {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  
  @media(${({theme}) => theme.device.m}) {
    display: flex;
    gap: 10%;
    padding: 0;
  }
  
  h3 {
    @media (${({ theme }) => theme.device.s}) and (max-width: 677px) {
      white-space: unset;
    }
  }
`;
