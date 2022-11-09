import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Mission() {
  return (
    <>
      <Head>
        <title>Mission Statement | Lincoln Medical Center</title>
        <meta
          name="description"
          content="Lincoln Medical Centre is comprised of a team of family physicians, nurses and support staff that work together to ensure that excellent quality patient care is provided in a respectful and compassionate environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Mission Statement" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Lincoln Medical Centre is comprised of a team of family
                physicians, nurses and support staff that work together to
                ensure that excellent quality patient care is provided in a
                respectful and compassionate environment.
              </p>
              <p>
                The Ontario Health Insurance Plan (OHIP) provides coverage for a
                vast majority of physician services; however, there are some
                services that are not covered.
              </p>
              <p>
                This policy outlines how we protect the privacy of your personal
                information and medical record. Everyone working for this office
                is required to adhere to the protections described in this
                policy
              </p>
              <h2>Mission Statement</h2>
              <p>
                Lincoln Medical Centre is comprised of a team of family
                physicians, nurses and support staff that work together to
                ensure that excellent quality patient care is provided in a
                respectful and compassionate environment.
              </p>
              <h2>Vision Statement</h2>
              <p>
                Lincoln Medical Centre is committed to seeking out the best
                health related technological advances and educational material
                to ensure that pro active and comprehensive care is provided to
                our patients in a confidential and professional setting.
              </p>
              <h2>Core Values</h2>
              <ul>
                <li>
                  Empathetic: to listen well and demonstrate sincere concern for
                  others and their well being.
                </li>
                <li>
                  Respect: treat others as you wish to be treated. Use open,
                  honest communication when dealing with both patient and peers.
                </li>
                <li>
                  Confidentiality: respect the importance of patient privacy and
                  confidentiality, be a protector of private information
                </li>
                <li>
                  Tolerance :we will not judge others regardless of their
                  situation or opinions. We will be understanding and
                  compassionate when dealing with patients and peers.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
