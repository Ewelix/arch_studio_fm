import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FormField from '../FormField/FormField';
import { Wrapper } from './Form.styles';

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
    <>
      <SectionTitle title="Connect with us" />
      <Wrapper as="form" onSubmit={handleSubmitForm}>
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
      </Wrapper>
    </>
  );
};

export default Form;
