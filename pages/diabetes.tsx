import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import contentImage from "../public/our-clinic.jpg";

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
            <Col lg="6">
              <p>
                Our nursing staff at Lincoln Medical Centre is involved in
                ongoing professional education, including training in diabetes.
                You will find them a great resource. To complement this, Public
                Health provides a Diabetic Team consisting of a diabetic nurse
                specialist, and dietician on Monday to Friday.
              </p>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={contentImage} alt="diabetes" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
