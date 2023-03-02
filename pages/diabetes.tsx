import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import contentImage from "../public/diabetes-logo.jpg";

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
                specialist, and dietician every Friday.
              </p>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={contentImage} alt="diabetes" />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col lg="6">
              <h2>Our Diabetic Dietician</h2>
              <p>
                The Dietician will help you manage blood sugar while also eating
                well. During your appointment you will learn about
                carbohydrates, proteins and how to read labels. You will also
                learn about appropriate meal spacing and snacks if needed.
              </p>
            </Col>
            <Col lg="6">
              <h2>Our Diabetic Nurse</h2>
              <p>
                The Diabetic Nurse provides guidance in managing blood glucose
                levels while working with patients to build competency to
                dealing with daily challenges of diabetes self-management. We
                also help to educate and assist patients on safe insulin
                therapy. The Diabetic Nurse promotes foot health through
                screening and education.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
