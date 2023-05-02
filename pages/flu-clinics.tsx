import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import contentImage from "../public/health-logo.jpg";

export default function FluClinics() {
  return (
    <>
      <Head>
        <title>Flu Clinics | Lincoln Medical Centre</title>
        <meta
          name="description"
          content="Our nursing staff at Lincoln Medical Centre is involved in ongoing professional education, including training in Flu CFlu Clinics are typically offered mid October to mid November several times during the week. Please call the office to book a time.linics. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Flu Clinics" />
      <section className="inner-content">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <p>
                Flu Clinics are typically offered mid October to mid November. Please call the office to book a time.
                After November we still can provide the flu vaccine until April 1st. Book an individual needle time by
                calling the office.
              </p>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={contentImage} alt="flu clinic" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
