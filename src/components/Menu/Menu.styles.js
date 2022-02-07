import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  padding: 4% 0 3%;

  a {
    padding: 15px 20px 5px 0;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    text-align: center;

    @media (${({ theme }) => theme.device.m}) {
      &::after {
        display: block;
        content: '';
        width: 20px;
        height: 1px;
        margin: 10px auto 0;
        background: ${({ theme }) => theme.colors.white};
        transition: background 0.3s ease-in-out;
      }

      &.active-link {
        color: ${({ theme }) => theme.colors.black};
        &::after {
          background: ${({ theme }) => theme.colors.black};
        }
      }

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
    }
    
    &:first-child {
      padding-right: 60px;
    }
  }
`;
