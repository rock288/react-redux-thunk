// import { Button } from 'reactstrap';
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
    <button
      type="button"
      className={`btn-custom btn text-center mt-4 ${isFullWidth ? 'w-100' : ''}`}
      onClick={onClick}
      disabled={!!disabled}
    >
      {text}
    </button>
  );
}

export default CustomButton;
