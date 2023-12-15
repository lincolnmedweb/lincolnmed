import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>Newsletter | Lincoln Medical Centre</title>
        <meta name="description" content="Check outLincoln Medical Centre's newsletter. Click here to learn more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Clinic Newsletter" />
      <section className="inner-content newsletter">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Welcome, Dr. Olubowale!</h2>
              <p>
                You will now notice a new face in our clinic as Dr. Katie Olubowale has taken over the practice of Dr.
                Dulymamode.
                <br />
                <br />
                Raised in Northern Ontario, “Dr. O” has spent the last 10 years in Tennessee before moving back to
                Canada to join us. She loves spending her free time outdoors, hiking, enjoying waterfalls and playing
                with her 3 young children.
                <br />
                <br />
                When she’s not relaxing outdoors, Dr. O enjoys cooking and working on perfecting her sourdough bread
                loaf! Dr. O participates in our Urgent Care Clinics.
              </p>
            </Col>
            <Col lg="6" className="card blue">
              <h2>Office Hours</h2>
              <p>
                <strong>Regular Hours:</strong>
              </p>
              <p>Monday to Friday 8:30 a.m. to 4:30 p.m. by appointment.</p>
              <p>
                <strong>Urgent Care Clinic:</strong>
              </p>
              <p>Monday to Thursday 5 p.m. to 7:30 p.m. by appointment.</p>
              <p>
                <em>Phone lines close 12 p.m. to 1 p.m. Monday to Friday.</em>
              </p>
              <p>
                <strong>Saturday Urgent Care Clinic:</strong>
              </p>
              <p>8 a.m. to 10:30 a.m.*</p>
              <p>
                <em>
                  Phone lines open 8 a.m. until 10 a.m. on Saturday. * hours may vary slightly. Please call the day of.
                </em>
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg="6">
              <div className="clinic card">
                <h2>Clinic Reminders</h2>
                <ul>
                  <li>Having an email on file lets us send you important appointment information and reminders.</li>
                  <li>Booking a routine appointment? Call us in the afternoon to avoid our peak hours.</li>
                  <li>Arrive 5 minutes before your appointment for check-in.</li>
                  <li>
                    Allow at least 1 - 2 weeks for med renewals. For most medications, your pharmacy is able to send a
                    request to your family doctor. SAME DAY MED RENEWALS NOW RESULT IN A $5 FEE.
                  </li>
                  <li>
                    Ensure your health card is up-to-date. Without a current health card, we are unable to book
                    appointments.
                  </li>
                  <li>Many notes and forms are not covered by OHIP. Forms may take 4 to 6 weeks for completion.</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <h2>HealthMyself</h2>
              <p>
                Introducing a new way to book your appointment! With the new HealthMyself portal you are able to book
                appointments online, receive appointment reminders via email, receive test results and be the first
                informed of any events or changes happening in the clinic.
                <br />
                <br />
                If you would like to sign up for this feature please call our office to get started. We will require an
                email attached to your chart so we may send you a personal activation link.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg="6">
              <h2>Why are family doctors important?</h2>
              <p>
                Your family doctor is your main point of contact between yourself and specialists in the healthcare
                system. When a patient uses a walk-in clinic, instead of seeing their family doctor, there is a lack of
                continuity of care. Most walk-in clinics do not have your complete medical history. Your family doctor
                will not receive reports, test results or know what treatment or referrals were made by a walk-in
                clinic.
                <br />
                <br />
                Being enrolled at a Family Health Organization, such as Lincoln Medical Centre, you have access to phone
                appointments, easy medication renewals, a support team for diabetic patients as well as personalized
                care by doctors who follow you and your family through life.
              </p>
            </Col>
            <Col lg="6" className="card blue">
              <h2>Flu Shots Now Available</h2>
              <p>
                Flu shots are now available for patients 6 months of age and older. Senior dose flu shots are available
                on a first come, first served basis and cannot be reserved as we receive limited supplies.
              </p>
              <p>
                <strong>
                  <a href="tel:(905) 563 - 1212">Call now to schedule an appointment!</a>
                </strong>
              </p>
              <strong>Tips for caring for children with flu, cold, and respiratory illness:</strong>
              <ul>
                <li>
                  <a target="_blank" href="https://lms.ontariofamilyphysicians.ca/files/OCFP_ActionsParentsCanTake.pdf">
                    Caring for Sick Children
                  </a>
                </li>
              </ul>
              <strong>Flu overview, preventative measures, and what to do if you get the flu:</strong>
              <ul>
                <li>
                  <a target="_blank" href="https://www.ontario.ca/page/flu-facts#section-5">
                    Flu Facts
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg="12">
              <h2>Nurses Corner</h2>
              <p>
                Have you received notice for a FIT Kit? If you are between the ages 50 to 74 a Fecal Immunochemical Test
                (FIT) is a painless and easy part of preventative health to screen for colorectal cancer or precancerous
                polyps by using antibodies to detect blood in the stool.
                <br />
                <br />
                Once you have been notified for a FIT Kit contact our clinic and we will work with LifeLabs to mail the
                kit directly to you. We do not have these kits in office and you must have an Ontario address and
                current health card to receive the package. You have the option to drop the completed kit off at your
                nearest LifeLabs or mail it back using the pre-paid envelope included.
                <br />
                <br />
                Please note that these tests are time sensitive and must be returned within 14 days of being completed.
                There is a 6 month window to complete the testing. If the results are normal you may repeat your
                screening again in 2 years. For instructions on how to complete the test please visit{" "}
                <a
                  target="_blank"
                  href="https://www.cancercareontario.ca/en/types-of-cancer/colorectal/screening/fit-instructions"
                >
                  Cancer Care Ontario
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
