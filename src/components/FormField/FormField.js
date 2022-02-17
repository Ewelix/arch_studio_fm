import React from 'react';

import PropTypes from 'prop-types';

import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Wrapper } from './FormField.styles';

const FormField = React.forwardRef(
  ({ onChange, value, name, id, type = 'text', errors, ...props }, ref) => {
    return (
      <Wrapper>
        {type === 'textarea' ? (
          <Textarea
            ref={ref}
            name={name}
            id={id}
            placeholder={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <Input
            ref={ref}
            name={name}
            id={id}
            type={type}
            placeholder={name}
            value={value}
            onChange={onChange}
          />
        )}
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
