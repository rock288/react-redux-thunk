/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../api/auth';
import { TextField, Checkbox, Button, Link, SocialMedia } from '../../../components';
import { setUser } from '../../../store/user/userReducer';
import { User } from '../../../types/user';
import { checkFormSignUp } from '../../../utils/validation';
import './index.scss';

const values = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isAcceptPolicy: false,
};

const messages = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function SignUpForm() {
  const [data, setData] = useState(values);
  const [errors, setErrors] = useState(messages);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setData({ ...data, isAcceptPolicy: checked });
  };

  const isEmptyErrors = ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    if (
      isEmpty(email) &&
      isEmpty(password) &&
      isEmpty(firstName) &&
      isEmpty(lastName)
    ) {
      return true;
    }

    return false;
  };

  const isValid = () => {
    const messages = checkFormSignUp(data);
    setErrors(messages);
    return isEmptyErrors(messages);
  };

  const onSignUp = async () => {
    if (isValid()) {
      try {
        const user: User = (await signUp({
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          email: data.email.trim(),
          password: data.password.trim(),
        })) as any;
        dispatch(setUser(user));
        navigate('/');
      } catch (_) {
        alert('sign-up failed');
      }
    }
  };

  return (
    <section className="form-login">
      <h4 className="title pb-4">Adventure starts here</h4>
      <p className="fw-bold pb-4">Make your app management easy and fun!</p>
      <TextField
        htmlFor={'first-name'}
        label={'Firstname'}
        value={data.firstName}
        message={errors.firstName}
        name={'firstName'}
        onChange={onChange}
        isRequired
      />
      <TextField
        htmlFor={'last-name'}
        label={'Lastname'}
        value={data.lastName}
        message={errors.lastName}
        name={'lastName'}
        onChange={onChange}
        isRequired
      />
      <TextField
        htmlFor={'login-name'}
        label={'Email'}
        value={data.email}
        message={errors.email}
        name={'email'}
        onChange={onChange}
        isRequired
      />
      <TextField
        htmlFor={'login-password'}
        label={'Password'}
        value={data.password}
        message={errors.password}
        name={'password'}
        type={'password'}
        onChange={onChange}
        isRequired
      />
      <Checkbox
        htmlFor="is-accept-policy"
        label={
          <p>
            i agree to <Link to="#">privacy policy & terms</Link>
          </p>
        }
        value={data.isAcceptPolicy}
        onChange={onChangeCheckbox}
      />
      <Button
        onClick={onSignUp}
        text="Sign Up"
        isFullWidth
        disabled={!data.isAcceptPolicy}
      />
      <p className="mt-4 text-center">
        Already have an account? <Link to={'/login'}>Sign in instead</Link>
      </p>

      <div className="d-flex flex-row align-items-center">
        <hr className="flex-fill" />
        <span className="px-2">or</span>
        <hr className="flex-fill" />
      </div>

      <SocialMedia />
    </section>
  );
}

export default SignUpForm;
