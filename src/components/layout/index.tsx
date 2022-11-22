import { Row, Col, Container } from 'reactstrap';
import { Banner } from '../../components';
import { ReactNode } from 'react';

interface Props {
  imgBanner: string;
  children: ReactNode;
}

function Layout({ imgBanner, children }: Props) {
  return (
    <Container fluid>
      <Row className="row min-vh-100">
        <Col className="d-none d-md-block bg-gray" xs="0" md="6" lg="8">
          <Banner src={imgBanner} alt="" />
        </Col>
        <Col
          xs="12"
          md="6"
          lg="4"
          className="d-flex justify-content-center align-items-center p-4"
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
