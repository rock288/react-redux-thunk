import { Row, Col, Container } from 'reactstrap';
import { Banner } from '../../components';
import SignUpForm from './sign-up-form';
import signUpImage from '../../assets/images/sign-up.svg';

function SignUp() {
  return (
    <Container fluid>
      <Row className="row min-vh-100">
        <Col className="d-none d-md-block banner-section" xs="0" md="6" lg="8">
          <Banner src={signUpImage} alt="" />
        </Col>
        <Col
          xs="12"
          md="6"
          lg="4"
          className="d-flex justify-content-center align-items-center p-4"
        >
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
