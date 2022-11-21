import { Row, Col, Container } from 'reactstrap';
import Banner from './banner';
import LoginForm from './login-form';

function DashBoard() {
  return (
    <Container fluid>
      <Row className="row min-vh-100">
        <Col className="d-none d-md-block banner-section" xs="0" md="6" lg="8">
          <Banner />
        </Col>
        <Col
          xs="12"
          md="6"
          lg="4"
          className="d-flex justify-content-center align-items-center p-4"
        >
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default DashBoard;
