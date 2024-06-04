import Head from "next/head";
import { Container, Row, Col, Accordion } from "react-bootstrap";

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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <h2>Test Results Turnaround Times</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Due to the overwhelming number of test results received each day, patients will be contacted to
                      book a follow-up visit to review test results with a doctor, if necessary. If you do not receive a
                      call and still would like to review the test results with your doctor, schedule an appointment at
                      your convenience.
                    </p>
                    <p>
                      Please allow 1-4 weeks for lab or imaging results. Times may vary for results, based on lab or
                      clinic backlog.{" "}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h2>Uninsured Services</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The Ontario Health Insurance Plan (OHIP) provides coverage for a vast majority of physician
                      services; however there are some services that are not covered. Physicians are pleased to offer
                      these valuable services; however, the responsibility for payment lies with the patient of the
                      third party requesting the service.
                    </p>
                    <p>
                      Select medical services such as cosmetic procedures (i.e. skin tag removal) or completion of forms
                      and medical records (i.e. sick note or insurance forms). Please note, forms may take 4 to 6 weeks
                      for completion.
                    </p>
                    <p>
                      <strong>Payment Methods:</strong>
                    </p>
                    <ul>
                      <li>Credit Cards (MasterCard or Visa)</li>
                      <li>Debit</li>
                      <li>Cash</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h2>Prescription Renewals</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Allow at least 1 to 2 weeks for medication renewals. For most medications, your pharmacy is able
                      to send a request to your family doctor. New medication requests, changes or select medications
                      require an appointment.
                    </p>
                    <p>Same day renewals now result in a $10 fee.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h2>Transferring Your Medical Chart</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      A Medical Release Form must be signed to request medical chart information. Please note there is a
                      fee of $60 for an individual or $100 for a family of two or more.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h2>Tuberculosis (TB) Testing</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The Mantoux tuberculin skin test can be done at our clinic with our nurses. This test is performed
                      by injecting a small amount of non-infectious tuberculosis into the skin in the lower part of the
                      arm. After this injection the patient must return within 48 hours to review the results and look
                      for any reaction on the arm.
                      <br />
                      <br />
                      As this testing relies on specific timing to complete check if you require a 1 Step or 2 Step test
                      when you schedule your appointment.
                      <br />
                      <br />
                      <strong>
                        OHIP does not cover the cost of TB skin tests that are required for employment, travel or
                        volunteer purposes.
                      </strong>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h2>Can I Speak to my Doctor Over the Phone?</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Doctors are not able to come to the phone as they are seeing patients. Please schedule an
                      appointment to see your doctor in the office or schedule a virtual phone appointment if
                      applicable.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
