import { Button } from 'reactstrap';
import './index.scss';

interface Props {
  text: string;
  onClick: () => void;
  isFullWidth?: boolean;
}

function Index(props: Props) {
  const { onClick, text, isFullWidth } = props;

  return (
    <Button
      type="button"
      className={`btn text-center btn-custom mt-4 ${isFullWidth ? 'w-100' : ''}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default Index;
