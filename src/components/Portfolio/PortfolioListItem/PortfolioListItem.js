import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './PortoflioListItem.styles';

const PortfolioListItem = ({ userData: { id, name, date } }) => {
  return (
    <Wrapper>
      <div className={`project project-${id}`}>
        <p>{name}</p>
        <p>{date}</p>
      </div>

      {/*<StyledButton>X</StyledButton>*/}
      {/*<StyledButton isSecondary isSquare="20px">*/}
      {/*  XX*/}
      {/*</StyledButton>*/}
    </Wrapper>
  );
};

PortfolioListItem.PropTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default PortfolioListItem;
