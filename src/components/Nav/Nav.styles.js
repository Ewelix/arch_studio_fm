import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const ShowAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  padding: 0 10px;
  position: relative;

  &::before {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    content: '';
    z-index: 3;
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

export const Logo = styled(Link)``;

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
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 15px 30px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
`;
