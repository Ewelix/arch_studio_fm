import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 5px 20px;
  
  @media(${({theme}) => theme.device.l}) {
    display: flex;
  }
  
  p {
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.fontSize.xxs};
    line-height: 25px;
  }
`;

export const SectionContainer = styled.div`
`;
