import styled from 'styled-components';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Input},
  ${Textarea} {
    margin-bottom: 15px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};

    &:focus {
      outline: none;
    }

    ::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.bluishGray};
    }
  }
`;
