import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  
  .slick-dots li  {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    :hover {
      background: ${({theme}) => theme.colors.black};
      
      div {
        color: ${({theme}) => theme.colors.white};
      }
    }
  }
`;

export const StyledPaginationItem = styled.div`
  font-size: ${({theme}) => theme.fontSize.xxs} !important;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme}) => theme.colors.black};
  line-height: 25px;
`