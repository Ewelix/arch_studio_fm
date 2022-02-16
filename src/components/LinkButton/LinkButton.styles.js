import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 20px 30px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  &:active {
    background: ${({ theme }) => theme.colors.mediumLightGray};
  }

  span {
    display: inline-block;
    padding-right: 20px;
  }

  svg g {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;
