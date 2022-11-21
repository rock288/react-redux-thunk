import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface Props {
  to: string;
  children: ReactNode;
}

function MyLink(props: Props) {
  const { to, children } = props;

  return (
    <Link to={to} className="custom-link">
      {children}
    </Link>
  );
}

export default MyLink;
