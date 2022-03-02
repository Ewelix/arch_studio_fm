import styled from 'styled-components';

export const StyledTitle = styled.h2`
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  @media (${({ theme }) => theme.device.m}) {
    opacity: 1;
    margin: 0;
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (${({ theme }) => theme.device.xl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
