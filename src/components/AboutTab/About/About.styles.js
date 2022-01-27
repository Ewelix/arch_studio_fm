import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 5px 30px;

  @media(${({theme}) => theme.device.m}) {
    padding: 0 0 15% 0;
  }
  
  @media(${({theme}) => theme.device.l}) {
    display: flex;
  }
  
  p {
    color: ${({theme}) => theme.colors.darkGray};
    font-size: ${({theme}) => theme.fontSize.xxs};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    line-height: 25px;
  }
  
  .heritage-img {
    display: none;

    @media(${({theme}) => theme.device.xl}) {
      display: block;
    }
  }
`;
