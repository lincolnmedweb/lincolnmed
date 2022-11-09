import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import clinicImage from "../public/our-clinic.jpg";

export default function Mission() {
  return (
    <>
      <Head>
        <title>Our Team | Lincoln Medical Center</title>
        <meta
          name="description"
          content="Lincoln Medical Centre's team of physicians are ready to help. Click here to learn more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Our Team" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <ul>
                <li>Dr. Aliu</li>
                <li>Dr. Cescon</li>
                <li>Dr. Dulymamode</li>
                <li>Dr. Habing</li>
                <li>Dr. Ireland</li>
                <li>Dr. Jeffery</li>
                <li>Dr.Kavanagh</li>
                <li>Dr. Laverdiere</li>
              </ul>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={clinicImage} alt="our team" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
