import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import Link from '../link';
import './index.scss';

interface Props {
  htmlFor: string;
  label: string;
  value: string;
  message: string;
  name: string;
  type?: InputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  isForgotPassword?: boolean;
}

function TextField(props: Props) {
  const {
    label,
    value,
    message,
    name,
    type,
    onChange,
    htmlFor,
    isRequired,
    isForgotPassword,
  } = props;

  return (
    <FormGroup>
      <div className="d-flex justify-content-between">
        <Label className={isRequired ? 'item-required' : ''} htmlFor={htmlFor}>
          {label}
        </Label>
        {isForgotPassword && <Link to="#">Forgot Password?</Link>}
      </div>
      <Input
        className="custom-input"
        id={htmlFor}
        type={type ?? 'text'}
        value={value}
        name={name}
        onChange={onChange}
      />
      <FormFeedback className={`d-block error-message`}>{message}</FormFeedback>
    </FormGroup>
  );
}

export default TextField;
