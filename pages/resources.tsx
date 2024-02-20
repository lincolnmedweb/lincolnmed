import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Patient Resources | Lincoln Medical Centre</title>
        <meta
          name="description"
          content="Lincoln Medical Centre provides valuable resourceful links to any client that requires them. Click here to view."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Patient Resources" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Public Health Links</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h4>
                <a href="https://www.niagararegion.ca/health/vaccinations/default.aspx" target="_blank">
                  Vaccines
                </a>
              </h4>
              <p>
                Reporting vaccinations or requesting records from Public Health as well as information regarding vaccine
                safety, vaccination clinics and vaccine requirements for school or daycare.
              </p>
              <h4>
                <a href="https://www.niagararegion.ca/parents/becoming-a-parent/default.aspx" target="_blank">
                  Pregnancy and Parenting
                </a>
              </h4>
              <p>
                Clinics and classes spanning from prenatal to postpartum support. Find resources for raising children
                with access to free parenting classes.
              </p>

              <h4>
                <a href="https://www.niagararegion.ca/living/health_wellness/dental/default.aspx" target="_blank">
                  Dental Health
                </a>
              </h4>
              <p>
                Dental care programs for all ages. How to prevent cavities, screening forms for school and schedules for
                mobile dental clinics for youth across the Niagara region.
              </p>
              <h4>
                <a href="https://www.niagararegion.ca/health/substances/tobacco/quitting-smoking.aspx" target="_blank">
                  Quitting Smoking
                </a>
              </h4>
              <p>Free help to quit smoking. Counseling and access to free nicotine replacement therapy</p>
              <h4>
                <a href="https://www.niagararegion.ca/living/health_wellness/mentalhealth/default.aspx" target="_blank">
                  Mental Health
                </a>
              </h4>
              <p>Adult and youth mental health services, eligibility and referrals.</p>
            </Col>
            <Col lg="6">
              <h4>
                <a href="#" target="_blank">
                  Crisis Intervention
                </a>
              </h4>
              <p>
                These are <strong>not</strong> rapid response services. For life-threatening emergencies call 911.
              </p>
              <ul>
                <li>
                  <a href="http://distresscentreniagara.com/" target="_blank">
                    <strong>Distress Centre Niagara</strong>
                  </a>
                  <br />
                  Immediate help 24 hour crisis line for Grimsby, Beamsville region call{" "}
                  <a href="tel:905-563-6674">905-563-6674</a>. For text support between 2 p.m. and 2 a.m. EST, text
                  “support” to 258258.
                </li>
                <li>
                  <a href="https://988.ca" target="_blank">
                    <strong>9-8-8</strong>
                  </a>
                  <br />
                  Canada wide Suicide Crisis Helpline call or text 988
                </li>
                <li>
                  <a href="https://niagara.cmha.ca/brochure/i-am-in-crisis/ " target="_blank">
                    <strong>COAST Niagara (Crisis Outreach and Support Team)</strong>
                  </a>
                  <br />
                  24-hours a day for individuals 16 years and older experiencing a mental health crisis in the Niagara
                  Region <a href="tel:1-866-550-5205">1-866-550-5205</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
