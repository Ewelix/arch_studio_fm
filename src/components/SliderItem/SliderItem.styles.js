import styled from 'styled-components';

export const Wrapper = styled.div`
  .slick-dots li button {
    font-size: ${({theme}) => theme.fontSize.xxs};
    font-weight: ${({theme}) => theme.fontWeight.bold};
  }
`