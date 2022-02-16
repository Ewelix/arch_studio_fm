import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
