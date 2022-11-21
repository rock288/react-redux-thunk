import React, { useState } from 'react';
import { login } from '../../../api/auth';
import { TextField, Checkbox, Button, Link, SocialMedia } from '../../../components';
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
  const [errors] = useState(messages);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onLogin = async () => {
    console.log('Login');
    const res = await login({
      email: 'test1@gmail.com',
      password: '12345678',
    });

    console.log({ res });
  };

  return (
    <section className="form-login">
      <h4 className="title pb-4">Welcome to Entrance Test Interview! 👋🏻</h4>
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
      />
      <Checkbox label="Remember me" value={data.isRemember} />
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
