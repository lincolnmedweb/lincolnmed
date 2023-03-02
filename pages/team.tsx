import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import clinicImage from "../public/our-staff.jpg";

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
              <h2>Physicians</h2>
              <ul>
                <li>Dr. Aliu</li>
                <li>Dr. Cescon</li>
                <li>Dr. Dulymamode</li>
                <li>Dr. Habing</li>
                <li>Dr. Ireland</li>
                <li>Dr. Jeffery</li>
                <li>Dr. Laverdiere</li>
                <br />
                <li>Office Manager - Jade Neilson</li>
              </ul>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={clinicImage} alt="our team" />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col lg="6">
              <h2>Our Nurses</h2>
              <p>
                We have 3 full-time nurses here at the clinic, you will see them
                assisting the doctors with well-baby visits and physicals. The
                nurses also perform other duties like various injections, ear
                flushing, suture/staple removal, applying holter monitors, and
                cryo therapy for warts.
              </p>
            </Col>
            <Col lg="6">
              <h2>Respiratory Therapist</h2>
              <p>
                Our COPD program empowers your family doctor to deliver
                integrated, evidence-based care for improved chronic disease
                management that includes self-management, education, skills
                training, and case management. It is a complete knowledge
                translation and interdisciplinary program that is led by a
                Certified Respiratory Educator who works collaboratively with
                the patient, and their family doctor to deliver continuous and
                improved quality health outcomes. Our COPD program is a
                “one-stop shopping” solution for patients who receive diagnostic
                testing, a bundle of personalized evidence-based best practices
                delivered by the team they trust, at Lincoln Medical Centre.
                Access to other interdisciplinary team members is arranged as
                required.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
