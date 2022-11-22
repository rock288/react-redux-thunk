import { Header, Footer } from '../../components';
import { Row, Col } from 'reactstrap';
import Body from './body';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../types/user';
// import { useNavigate } from 'react-router-dom';

function DashBoard() {
  // const navigate = useNavigate();
  const user: User = useSelector((state: { user: User }) => state.user);

  useEffect(() => {
    console.log({ user });
    // navigate('/login');
  }, []);

  return (
    <>
      <Row>
        <Col className="bg-light border">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border">
          <Body />
        </Col>
      </Row>
      <Row>
        <Col className="bg-light border">
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default DashBoard;
