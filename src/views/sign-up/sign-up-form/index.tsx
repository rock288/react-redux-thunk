import React, { useState } from 'react';
import { TextField, Checkbox, Button, Link, SocialMedia } from '../../../components';
import './index.scss';

const values = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isRemember: false,
};

const messages = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function SignUpForm() {
  const [data, setData] = useState(values);
  const [errors] = useState(messages);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setData({ ...data, isRemember: checked });
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
        value={data.isRemember}
        onChange={onChangeCheckbox}
      />
      <Button
        onClick={() => {
          console.log('zz');
        }}
        text="Login"
        isFullWidth
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
