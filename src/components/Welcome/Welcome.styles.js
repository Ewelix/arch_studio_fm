import styled from 'styled-components';

import { SectionContainer } from '../../views/About/About.styles';

export const Wrapper = styled.div`
  padding: 30px 20px;

  @media (${({ theme }) => theme.device.l}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: ${({ theme }) => theme.sectionMargin};
  }

  h2 {
    @media (${({ theme }) => theme.device.l}) {
      z-index: 1;
      flex-basis: 100%;
      margin-bottom: -120px;
      padding-left: 50px;
    }
  }

  ${SectionContainer} {
    @media (${({ theme }) => theme.device.l}) {
      align-self: end;
      margin: 0 auto;
    }

    @media (${({ theme }) => theme.device.xl}) {
      margin-left: 20%;
    }
  }

  .welcome-img {
    display: none;

    @media (${({ theme }) => theme.device.l}) {
      display: block;
    }
  }

  h3 {
    margin: 0 0 15px;
  }
`;
