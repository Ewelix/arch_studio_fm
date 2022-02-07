import styled from 'styled-components';
import { StyledLink } from '../MenuLinks/MenuLinks.styles';
import { StyledButton } from '../LinkButton/LinkButton.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  background: ${({ theme }) => theme.colors.lightGray};

  @media(${({theme}) => theme.device.m}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: calc(100% - 100px);
    max-height: 120px;
  }

  @media(${({theme}) => theme.device.xl}) {
    min-height: 200px;
    max-width: 1000px;
  }

  ${StyledLink} {
    padding: 15px 0;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
  
  ${StyledButton} {
    margin: 20px 0 50px;

    @media(${({theme}) => theme.device.m}) {
      margin: 30px -100px 30px 0;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-top: -50px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.black};

  @media(${({theme}) => theme.device.m}) {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media(${({theme}) => theme.device.xl}) {
    width: 200px;
    height: 200px;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`
