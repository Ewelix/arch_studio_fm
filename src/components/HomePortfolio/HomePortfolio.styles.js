import styled from 'styled-components';

import { StyledButton } from '../LinkButton/LinkButton.styles';
import { StyledList } from '../PortfolioList/PortfolioList.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (${({ theme }) => theme.device.s}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.sectionMargin};
  }

  h3 {
    margin: 10px 0 10px;
    padding: 0 20px;

    @media (${({ theme }) => theme.device.s}) {
      flex-basis: 50%;
      padding: 0;
    }
  }

  .project {
    @media (${({ theme }) => theme.device.s}) {
      &::before {
        position: absolute;
        z-index: 5;
        right: 15px;
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        opacity: 0.5;
      }

      &:first-child::before {
        content: '1';
      }

      &:nth-child(2)::before {
        content: '2';
      }

      &:last-child::before {
        content: '3';
      }
    }

    @media (${({ theme }) => theme.device.s}) {
      &::before {
        right: -15px;
      }
    }
    }
  }

  ${StyledButton} {
    justify-content: center;
    width: auto;
    margin: 0 20px 20px;

    @media (${({ theme }) => theme.device.s}) {
      order: 2;
      max-width: 170px;
      margin: 0;
    }
  }

  ${StyledList} {
    @media (${({ theme }) => theme.device.s}) {
      order: 3;
      flex-basis: 100%;
      padding: 0;
    }
  }
`;
