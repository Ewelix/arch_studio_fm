const validation = (values) => {
  let errors = {};

  for (const key in values) {
    if (/^\s*$/.test(values[key])) {
      errors[key] = "Can't be empty!";
    }
  }

  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid e-mail!';
  }

  return errors;
};
export default validation;
