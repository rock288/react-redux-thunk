import { isEmpty } from 'lodash';

export const checkFormLogin = (data: { email: string; password: string }) => {
  const messages = {
    email: '',
    password: '',
  };

  const IS_REQUIRED = 'is required';

  // validate email
  if (isEmpty(data.email)) {
    messages.email = 'Email ' + IS_REQUIRED;
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

  const IS_REQUIRED = 'is required';

  // validate firstName
  if (isEmpty(data.firstName)) {
    messages.email = 'Firstname ' + IS_REQUIRED;
  }

  // validate lastName
  if (isEmpty(data.lastName)) {
    messages.email = 'Lastname ' + IS_REQUIRED;
  }

  // validate email
  if (isEmpty(data.email)) {
    messages.email = 'Email ' + IS_REQUIRED;
  }

  // validate password
  if (isEmpty(data.password)) {
    messages.password = 'Password ' + IS_REQUIRED;
  }

  return messages;
};
