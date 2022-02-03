import styled from 'styled-components';

export const Wrapper = styled.div`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 7%);
  }
`;

export const SectionContent = styled.div`
  position: absolute;
  top: calc((700px - 350px) / 2);
  z-index: 4;
  margin-left: 1.5%;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: ${({ theme }) => theme.fontSize.xl};
    white-space: pre-line;
  }

  p {
    max-width: 445px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
