import { isEmpty } from 'lodash';

const IS_REQUIRED = 'is required';

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const checkFormLogin = (data: { email: string; password: string }) => {
  const messages = {
    email: '',
    password: '',
  };

  // validate email
  if (isEmpty(data.email)) {
    messages.email = 'Email ' + IS_REQUIRED;
  } else if (!validateEmail(data.email)) {
    messages.email = 'The email is not valid';
  }

  // validate password
  if (isEmpty(data.password)) {
    messages.password = 'Password ' + IS_REQUIRED;
  }

  return messages;
};

export const checkFormSignUp = (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const messages = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  // validate firstName
  if (isEmpty(data.firstName)) {
    messages.firstName = 'Firstname ' + IS_REQUIRED;
  }

  // validate lastName
  if (isEmpty(data.lastName)) {
    messages.lastName = 'Lastname ' + IS_REQUIRED;
  }

  // validate email
  if (isEmpty(data.email)) {
    messages.email = 'Email ' + IS_REQUIRED;
  } else if (!validateEmail(data.email)) {
    messages.email = 'The email is not valid';
  }

  // validate password
  if (isEmpty(data.password)) {
    messages.password = 'Password ' + IS_REQUIRED;
  } else if (data.password.length < 6 || data.password.length > 18) {
    messages.password = 'The password must be between 6-18 characters';
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,18}$/g.test(
      data.password
    )
  ) {
    messages.password =
      'The password must contain at least one digit, one special character, and one letter.';
  }

  return messages;
};
