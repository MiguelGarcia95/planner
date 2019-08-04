const validateEmail = email => {
  var regexString = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexString.test(email.toLowerCase());
}

export const validateForm = formData => {
  let errors = {};
  let valid = true;

  if (formData.username === '') {
    errors.username = {error: 'Username can\'t be empty'}
    valid = false;
  }

  if (formData.email === '') {
    errors.email = {error: 'Email can\'t be empty'}
    valid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = {error: 'Your email is invalid.'}
    valid = false;
  } 

  if (formData.password === '') {
    errors.password = {error: 'Password can\'t be empty'}
    valid = false;
  } else if (formData.password.length < 5) {
    errors.password = {error: 'Password can\'t be less than 6 characters.'}
    valid = false;
  }

  if (formData.password_confirmation || formData.password_confirmation === '') {
    if (formData.password_confirmation === '') {
      errors.password_confirmation = {error: 'Password can\'t be empty'}
      valid = false;
    } else if (formData.password !== formData.password_confirmation) {
      errors.password_confirmation = {error: 'Password is not the same'}
      valid = false;
    }
  }

  return {valid, errors};
}