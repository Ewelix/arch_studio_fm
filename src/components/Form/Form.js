import React, { useEffect, useState } from 'react';

import emailjs from 'emailjs-com';
import FormField from '../FormField/FormField';
import LinkButton from '../LinkButton/LinkButton';
import SectionTitle from '../SectionTitle/SectionTitle';
import validation from '../../helpers/validation';
import { Wrapper, FormWrapper } from './Form.styles';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

const Form = ({ submitForm }) => {
  const [formValues, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const { name, email, message } = formValues;

  const handleInputChange = (e) => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validation(formValues);

    if (Object.keys(errorMessage).length) {
      setErrors(errorMessage);
      console.log('blad');
      return;
    }

    setDataIsCorrect(true);

    try {
      await emailjs.sendForm(
        'gmail',
        'template_6bq3nn4',
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setErrors({});
      setValues(initialFormState);
      submitForm(true);
    } catch {
      setErrors('Blad wysylania wiadomosci');
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return (
    <Wrapper>
      <SectionTitle title={`Connect \n with us`} />
      <FormWrapper as="form" onSubmit={handleSubmit}>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          errors={errors}
        />
        {errors.name && <p>{errors.name}</p>}

        <FormField
          label="Email"
          id="email"
          name="email"
          value={email}
          type="email"
          onChange={handleInputChange}
          errors={errors}
        />
        {errors.email && <p>{errors.email}</p>}
        <FormField
          label="Message"
          id="message"
          name="message"
          type="textarea"
          value={message}
          onChange={handleInputChange}
          errors={errors}
        />
        {errors.message && <p>{errors.message}</p>}
        <LinkButton as="button" />
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
