import { Row, Col, Container } from 'reactstrap';

function SignUp() {
  return (
    <Container fluid>
      <Row className="row min-vh-100">
        <Col className="d-none d-md-block banner-section" xs="0" md="6" lg="8"></Col>
        <Col
          xs="12"
          md="6"
          lg="4"
          className="d-flex justify-content-center align-items-center p-4"
        ></Col>
      </Row>
    </Container>
  );
}

export default SignUp;
