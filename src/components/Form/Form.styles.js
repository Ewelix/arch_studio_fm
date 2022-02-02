import styled from 'styled-components';

export const FormWrapper = styled.div``;

export const Wrapper = styled.div`
  h3 {
    @media (${({ theme }) => theme.device.m}) and (max-width: 1023px) {
      white-space: unset;
    }
  }
`;
