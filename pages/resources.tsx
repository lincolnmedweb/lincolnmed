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
          <br />
          <Row>
            <Col lg="12">
              <h2 className="text-center">Knowing Your Health Care Options</h2>
            </Col>
          </Row>
          <Row className="healthcare-options">
            <Col lg="6">
              <div className="heading-green">
                <h3>When to go to your Doctor's Office</h3>
              </div>
              <div className="card">
                <ul>
                  <li>Abdominal pain (under age 50)</li>
                  <li>Allergies</li>
                  <li>Bites</li>
                  <li>Diarrhea</li>
                  <li>Minor cuts or tears</li>
                  <li>Cough, cold, flu symptoms</li>
                  <li>Sore throat</li>
                  <li>Minor head injuries (under age 65)</li>
                  <li>Minor injuries</li>
                  <li>Minor sprains and strains</li>
                  <li>Minor burns</li>
                  <li>Skin rashes</li>
                  <li>Eye, nose, ear complaints</li>
                  <li>Urinary tract infection</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <h3 className="heading-red">When to go to an Emergency Department</h3>
              <div className="card">
                <ul>
                  <li>Abdominal pain (over age 50)</li>
                  <li>Chest pain or pressure</li>
                  <li>Dizziness</li>
                  <li>Fracture</li>
                  <li>Early pregnancy complications (under 12 weeks)</li>
                  <li>Numbness, weakness</li>
                  <li>Severe bleeding</li>
                  <li>Severe headaches</li>
                  <li>Shortness of breath</li>
                  <li>Trauma</li>
                  <li>Unconsciousness</li>
                  <li>Urgent mental health conditions, psychosis, or thoughts of harm to self or others.</li>
                  <li>Vision loss</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p>
                <strong>
                  Patients requiring emergency medical assistance should call 9-1-1 or visit the hospital Emergency
                  Department.
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
