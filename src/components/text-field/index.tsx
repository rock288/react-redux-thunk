import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
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
}

function TextField(props: Props) {
  const { label, value, message, name, type, onChange, htmlFor, isRequired } = props;

  return (
    <FormGroup>
      <Label className={isRequired ? 'item-required' : ''} htmlFor={htmlFor}>
        {label}
      </Label>
      <Input
        id={htmlFor}
        type={type ?? 'text'}
        value={value}
        name={name}
        onChange={onChange}
      />
      {message ?? <FormFeedback>{message}</FormFeedback>}
    </FormGroup>
  );
}

export default TextField;
