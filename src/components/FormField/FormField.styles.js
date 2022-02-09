import styled from 'styled-components';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Input},
  ${Textarea} {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    &:focus {
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
  }
`;
