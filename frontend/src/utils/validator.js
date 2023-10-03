export const signInValidate = (values) => {
  var errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format!';
  }
  if (!values.password) {
    errors.password = 'password is required';
  }
  return errors;
};

