import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FormField from '../FormField/FormField';

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SectionTitle title="Connect with us" />
      <form>
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
      </form>
    </>
  );
};

export default Form;
