import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
