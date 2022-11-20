import { Header, Footer } from '../../components';
import { Row, Col } from 'reactstrap';
import Body from './body';

function DashBoard() {
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
