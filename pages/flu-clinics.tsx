import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function FluClinics() {
  return (
    <>
      <Head>
        <title>Flu Clinics | Lincoln Medical Center</title>
        <meta
          name="description"
          content="Our nursing staff at Lincoln Medical Centre is involved in ongoing professional education, including training in Flu CFlu Clinics are typically offered mid October to mid November several times during the week. Please call the office to book a time.linics. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Flu Clinics" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Flu Clinics are typically offered mid October to mid November.
                Please call the office to book a time. After November we still
                can provide the flu vaccine until April 1st. Book an individual
                needle time by calling the office.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
