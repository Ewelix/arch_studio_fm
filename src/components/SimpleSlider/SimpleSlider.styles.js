import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.sectionMargin};

  .slick-dots {
    display: none !important;

    @media (${({ theme }) => theme.device.l}) {
      display: block !important;
      bottom: 0;
      left: calc(-50% + 80px);

      li {
        width: 80px;
        height: 80px;
        margin: 0;
        background: ${({ theme }) => theme.colors.white};
        transition: background-color 0.5s;

        :hover {
          background: ${({ theme }) => theme.colors.lightGray};
        }

        &.slick-active {
          background: ${({ theme }) => theme.colors.black};

          div {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
`;

export const StyledPaginationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.xxs} !important;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 25px;
`;
