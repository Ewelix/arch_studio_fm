const validation = (values) => {
  let errors = {};

  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid e-mail!';
  }

  if (values.name && (!values.name || /\s/.test(values.name))) {
    errors.name = 'Invalid name!';
  }

  if (!values.message || values.message.length < 120) {
    errors.message = 'Your message must be at least 120 characters long';
  }

  return errors;
};

export default validation;
