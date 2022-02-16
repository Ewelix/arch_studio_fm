import styled from 'styled-components';

export const StyledSocialMedia = styled.div`
  @media (${({ theme }) => theme.device.m}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 35px));
    opacity: 0;
    z-index: 9999;
    transition: opacity 0.3s ease-in-out;
  }

  svg {
    margin-right: 20px;
    cursor: pointer;

    @media (${({ theme }) => theme.device.m}) {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
