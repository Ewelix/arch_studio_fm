import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FormField from '../FormField/FormField';
import { Wrapper, FormWrapper } from './Form.styles';
import LinkButton from '../LinkButton/LinkButton';

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const { name, email, message } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setFormValues(initialFormState);
  }

  return (
    <Wrapper>
      <SectionTitle title={`Connect \n with us`} />
      <FormWrapper as="form" onSubmit={handleSubmitForm}>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <FormField
          label="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <FormField
          label="Message"
          id="message"
          name="message"
          type="textarea"
          value={message}
          onChange={handleInputChange}
        />
        <LinkButton as="button"/>
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
