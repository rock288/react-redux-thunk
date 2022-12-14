import { Footer } from '../../components';
import { Row, Col, Container } from 'reactstrap';
import Body from './body';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/indexDB';
import { setUser } from '../../store/user/userReducer';
import { useDispatch } from 'react-redux';
import Header from './header';

function DashBoard() {
  const navigate = useNavigate();
  const user: User | null = useSelector(
    (state: { user: User | null }) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const userLocal = getItem('user');
      if (userLocal) {
        dispatch(setUser(userLocal));
      } else {
        navigate('/login');
      }
    }
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col className="">
          <Header user={user} />
        </Col>
      </Row>
      <Row className="bg-gray">
        <Col className="">
          <Body />
        </Col>
      </Row>
      <Row className="bg-gray">
        <Col className="">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default DashBoard;
