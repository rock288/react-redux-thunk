import { ReactNode } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

interface Props {
  label: string | ReactNode;
  value: boolean;
}

function Checkbox(props: Props) {
  const { label, value } = props;

  return (
    <FormGroup check>
      <Input type="checkbox" value={value.toString()} /> <Label check>{label}</Label>
    </FormGroup>
  );
}

export default Checkbox;
