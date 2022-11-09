import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Diabetes() {
  return (
    <>
      <Head>
        <title>Diabetes | Lincoln Medical Center</title>
        <meta
          name="description"
          content="Our nursing staff at Lincoln Medical Centre is involved in ongoing professional education, including training in diabetes. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Diabetes" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Our nursing staff at Lincoln Medical Centre is involved in
                ongoing professional education, including training in diabetes.
                You will find them a great resource. To complement this, Public
                Health provides a Diabetic Team consisting of a diabetic nurse
                specialist, and dietician on Mondays.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
