import React, { useEffect, useRef, useState } from 'react';

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

const url = 'https://jsonplaceholder.typicode.com/posts';

const Form = ({ submitForm }) => {
  const [formValues, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const { name, email, message } = formValues;
  const ref = useRef(null);

  const handleInputChange = (e) => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formValues));
    setDataIsCorrect(true);

    // console.log('formValues', formValues);

    emailjs
      .sendForm('gmail', 'template_6bq3nn4', e.target, 'tBjgonc_GsSUavTHS')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setValues(initialFormState);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  });

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
        {errors.name && <p className="error">{errors.name}</p>}

        <FormField
          label="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          errors={errors}
        />
        <FormField
          label="Message"
          id="message"
          name="message"
          type="textarea"
          value={message}
          onChange={handleInputChange}
          errors={errors}
        />
        <LinkButton as="button" />
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;
