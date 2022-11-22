/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/auth';
import { Button, Checkbox, Link, SocialMedia, TextField } from '../../../components';
import { setUser } from '../../../store/user/userReducer';
import { User } from '../../../types/user';
import { checkFormLogin } from '../../../utils/validation';
import { setItem } from '../../../utils/indexDB';
import './index.scss';

const values = {
  email: '',
  password: '',
  isRemember: false,
};

const messages = {
  email: '',
  password: '',
};

function LoginForm() {
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
    setData({ ...data, isRemember: checked });
  };

  const isEmptyErrors = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (isEmpty(email) && isEmpty(password)) {
      return true;
    }

    return false;
  };

  const isValid = () => {
    const messages = checkFormLogin(data);
    setErrors(messages);
    return isEmptyErrors(messages);
  };

  const onLogin = async () => {
    if (isValid()) {
      try {
        const user: User = (await login({
          email: data.email.trim(),
          password: data.password.trim(),
        })) as any;
        dispatch(setUser(user));
        // chua ro~ de`
        // if (data.isRemember) {
        //   setItem('user', user);
        // }
        setItem('user', user);
        navigate('/');
      } catch (_) {
        alert('login failed');
      }
    }
  };

  return (
    <section className="form-login">
      <h4 className="title pb-4">Welcome to ReactJS Test Interview! 👋🏻</h4>
      <p className="fw-bold pb-4">
        Please sign-in to your account and start the adventure
      </p>
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
        isForgotPassword
      />
      <Checkbox
        htmlFor="is-remember-login"
        label="Remember me"
        value={data.isRemember}
        onChange={onChangeCheckbox}
      />
      <Button onClick={onLogin} text="Login" isFullWidth />
      <p className="mt-4 text-center">
        New on our platform? <Link to={'/sign-up'}>Create an account</Link>
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

export default LoginForm;
