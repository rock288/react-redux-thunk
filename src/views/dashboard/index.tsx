import { Header, Footer } from '../../components';
import { Row, Col } from 'reactstrap';
import Body from './body';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../utils/indexDB';
import { setUser } from '../../store/user/userReducer';
import { useDispatch } from 'react-redux';

function DashBoard() {
  const navigate = useNavigate();
  const user: User = useSelector((state: { user: User }) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      dispatch(setUser(user));
    } else {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <Row>
        <Col className="bg-light border">
          <Header user={user} />
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
