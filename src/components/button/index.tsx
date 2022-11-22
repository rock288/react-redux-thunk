import { Button } from 'reactstrap';
import './index.scss';

interface Props {
  disabled?: boolean;
  text: string;
  onClick: () => void;
  isFullWidth?: boolean;
}

function CustomButton(props: Props) {
  const { onClick, text, isFullWidth, disabled } = props;

  return (
    <Button
      type="button"
      className={`btn text-center btn-custom mt-4 ${isFullWidth ? 'w-100' : ''}`}
      onClick={onClick}
      disabled={!!disabled}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
