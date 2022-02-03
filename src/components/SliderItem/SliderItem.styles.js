import styled from 'styled-components';

export const Wrapper = styled.div`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 7%);
  }
`;

export const SectionContent = styled.div`
  position: absolute;
  top: calc((700px - 320px) / 2);
  z-index: 4;
  max-width: 400px;
  margin-left: 1.5%;
  color: ${({theme}) => theme.colors.white};
  
  h2 {
    margin: 20px 0;
    font-size: ${({theme}) => theme.fontSize.xl};
    line-height: ${({theme}) => theme.fontSize.xl};
    white-space: pre-line;
  }
  
  p {
    color: ${({theme}) => theme.colors.white};
  }
`;