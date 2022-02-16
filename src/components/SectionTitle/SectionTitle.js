import React from 'react';

import PropTypes from 'prop-types';

import { StyledSectionTitle } from './SectionTitle.styles';

const SectionTitle = ({ title }) => <StyledSectionTitle>{title}</StyledSectionTitle>;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SectionTitle;
