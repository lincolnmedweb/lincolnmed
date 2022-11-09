import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Lincoln Medical Center</title>
        <meta
          name="description"
          content="Lincoln Medical Centre's can you help you with your needs. Contact us today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Contact Us" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Address</h2>
              <p>4413 Ontario St. Beamsville, ON L0R 1B5</p>

              <h2>Phone</h2>
              <p> 905-563-1212</p>

              <h2>Fax</h2>
              <p>905-563-4404</p>

              <h2>Hours of Operation</h2>
              <p>Monday to Friday 8:30am-8:00pm</p>
              <p>Saturday 8:00am-11:00am</p>
            </Col>
            <Col lg="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11639.142857263!2d-79.476277!3d43.172022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5776c75a56e4a954!2slincoln%20medical%20centre!5e0!3m2!1sen!2sca!4v1668006353640!5m2!1sen!2sca"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
