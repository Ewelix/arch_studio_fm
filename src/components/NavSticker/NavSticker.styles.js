import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  align-items: center;
  gap: 40px;
  transform: translateY(-100%) translateX(-58%) rotate(90deg);

  @media (${({ theme }) => theme.device.xxl}) {
    transform: translateY(-100%) translateX(-65%) rotate(90deg);
  }

  span {
    width: 220px;
    color: ${({ theme }) => theme.colors.mediumLightGray};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-transform: uppercase;
    letter-spacing: 15px;
  }
`;

export const NavDecoration = styled.div`
  width: 230px;
  height: 1px;
  background: ${({ theme }) => theme.colors.mediumLightGray};
`;
