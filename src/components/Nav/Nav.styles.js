import styled, { keyframes } from 'styled-components';

const ShowAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.white};

  @media (${({ theme }) => theme.device.s}) {
    padding: 4% 0 3%;
  }

  &::before {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    content: '';
    z-index: 5;
    top: 70px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const MenuToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: none;
`;

export const Navigation = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 69px;
  right: 0;
  z-index: 5;
  width: 90%;
  min-height: 100px;
  padding: 30px 20px;
  background: ${({ theme }) => theme.colors.lightGray};
  animation: 0.3s 1 forwards ${ShowAnimation};

  a {
    display: block;
    padding: 15px 30px;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
