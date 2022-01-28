import styled from 'styled-components';

export const Wrapper = styled.div`
  .nav {
    @media(${({theme}) => theme.device.s}) {
      overflow: hidden;
    }
    
    &__link {
      display: none;

      @media(${({theme}) => theme.device.s}) {
        float: left;
        display: block;
        padding: 14px 16px;
        color: #f2f2f2;
        font-size: 17px;
        text-decoration: none;
        text-align: center;
        

        &:hover {
          color: black;
          background-color: #ddd;
        }
      }
    }

    a.nav__icon {
      float: right;
      display: block;
      
      @media(${({theme}) => theme.device.s}) {
        display: none;
      }
    }
    
    &.responsive {
      position: relative;

      .nav__icon {
        position: absolute;
        right: 0;
        top: 0;
      }

      a {
        float: none;
        display: block;
        text-align: left;
      }
    }
  }
`