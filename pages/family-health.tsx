import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function FamilyHealth() {
  return (
    <>
      <Head>
        <title>Family Health Organization | Lincoln Medical Centre</title>
        <meta
          name="description"
          content="Lincoln Medical Centre is comprised of a team of family physicians, nurses and support staff that work together to ensure that excellent quality patient care is provided in a respectful and compassionate environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Family Health Organization" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Uninsured Services – What You Need To Know</h2>
              <p>
                The Ontario Health Insurance Plan (OHIP) provides coverage for a vast majority of physician services;
                however, there are some services that are not covered.
              </p>
              <p>
                Physicians are pleased to offer these valuable services; however, the responsibility for payment lies
                with the patient or the third party requesting the service.
              </p>
              <p>
                Quality health care, medical advice and timely access are priorities that Ontario’s physicians intend to
                honour. Speak with your physician for more information about other health care services that are not
                covered by OHIP.
              </p>
              <p>
                For more information,{" "}
                <Link target="_blank" href="../../assets/uninsured.pdf">
                  view a list of examples of services not covered by OHIP.
                </Link>
              </p>
              <h2>Important Result Information</h2>
              <p>
                Due to the overwhelming number of test results received each day, we will usually only notify you if
                follow-up is required. You may phone and inquire about your result if you have a particular concern.
              </p>
              <p>
                Please allow at least 48 hours for blood work results and at least 72 hours for x-rays or other
                investigative test results.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
