import styled from 'styled-components';

import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Input},
  ${Textarea} {
    padding: 15px 0 25px 15px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Spartan', sans-serif;
    border: none;
    transition: box-shadow 400ms linear;
    box-shadow: 0px -1px 0px ${({ theme }) => theme.colors.black} inset;

    &:focus {
      box-shadow: 0px -2px 0px ${({ theme }) => theme.colors.black} inset;
      outline: none;
    }

    ::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.bluishGray};
    }
  }

  ${Input} {
    margin-bottom: 15px;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: 0px -1px 0px ${({ theme }) => theme.colors.black} inset;
    }
  }

  p {
    position: absolute;
    color: red;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
