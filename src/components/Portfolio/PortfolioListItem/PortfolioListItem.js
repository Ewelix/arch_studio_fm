import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../../LinkButton/LinkButton.styles';

const PortfolioListItem = ({ userData: { id, name, date } }) => {
  return (
      <li className={`project project-${id}`}>
        <p className="project__name">{name}</p>
        <p className="project__date">{date}</p>
      </li>
  );
};

PortfolioListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default PortfolioListItem;
