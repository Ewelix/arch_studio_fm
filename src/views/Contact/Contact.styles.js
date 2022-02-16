import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 5px 20px;

  @media (${({ theme }) => theme.device.l}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
  }

  & + .map-img {
    flex-basis: 100%;
    margin: 7% auto ${({ theme }) => theme.sectionMargin};
  }

  h3 {
    @media (${({ theme }) => theme.device.m}) {
      white-space: unset;
    }

    @media (${({ theme }) => theme.device.l}) {
      margin: 0;
      white-space: pre-line;
    }
  }
`;
