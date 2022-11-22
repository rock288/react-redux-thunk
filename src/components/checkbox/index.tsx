import { ReactNode } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

interface Props {
  htmlFor: string;
  label: string | ReactNode;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox(props: Props) {
  const { label, value, onChange, htmlFor } = props;

  return (
    <FormGroup check>
      <Input
        id={htmlFor}
        type="checkbox"
        value={value.toString()}
        onChange={onChange}
      />{' '}
      <Label htmlFor={htmlFor} check>
        {label}
      </Label>
    </FormGroup>
  );
}

export default Checkbox;
