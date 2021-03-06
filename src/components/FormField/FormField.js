import React from 'react';

import PropTypes from 'prop-types';

import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Wrapper } from './FormField.styles';

const FormField = ({ onChange, value, name, id, label, type = 'text' }) => {
  return (
    <Wrapper>
      {type === 'textarea' ? (
        <Textarea
          name={name}
          id={id}
          placeholder={label}
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <Input
          name={name}
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </Wrapper>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
