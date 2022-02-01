import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 10px;

  @media (${({ theme }) => theme.device.s}) {
    display: block;
  }
`;

export const StyledNav = styled.nav`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  position: relative;
  
  @media (${({ theme }) => theme.device.m}) {
    margin: 3% 0;
  }

  .nav {
    position: absolute;
    top: 0;
    z-index: 5;
    width: 90%;
    
    @media (${({ theme }) => theme.device.s}) {
      display: flex;
      overflow: hidden;
    }

    a.nav__icon {
      float: right;
      display: block;

      @media (${({ theme }) => theme.device.s}) {
        display: none;
      }
    }

    &.responsive {
      position: absolute;
      right: -10px;
      margin-top: 5px;
      padding: 30px 20px;
      background: ${({ theme }) => theme.colors.lightGray};
      
      a {
        display: block;
        padding: 15px 30px;
        font-size: ${({theme}) => theme.fontSize.xs};
      }
    }

  }
  .nav__icon {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: none;
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontSize.xxs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  text-decoration: none;
  
  @media (${({ theme }) => theme.device.s}) {
    display: block;
    padding: 15px 20px 5px;
    color: ${({theme}) => theme.colors.mediumGray};
    text-align: center;

    &::after {
      display: block;
      content: '';
      width: 20px;
      height: 1px;
      margin: 10px auto 0;
      background: ${({theme}) => theme.colors.white};
    }

    &:hover {
      color: ${({theme}) => theme.colors.black};

      &::after {
        background: ${({theme}) => theme.colors.black};
      }
    }
  }
`;
