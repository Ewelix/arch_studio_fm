import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
