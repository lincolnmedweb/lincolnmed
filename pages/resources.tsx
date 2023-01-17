import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Patient Resources | Lincoln Medical Center</title>
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
            <Col lg="6">
              <h2>Public Health Links</h2>
              <p>Vaccines:</p>
              <a
                href="https://www.niagararegion.ca/health/vaccinations/default.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/health/vaccinations/default.aspx
              </a>
              <p>Pregnancy:</p>
              <a
                href="https://www.niagararegion.ca/parents/becoming-a-parent/default.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/parents/becoming-a-parent/default.aspx
              </a>
              <p>Parenting:</p>
              <a
                href="https://www.niagararegion.ca/parents/default.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/parents/default.aspx
              </a>
              <p>School Health:</p>
              <a
                href="https://www.niagararegion.ca/health/schools/default.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/health/schools/default.aspx
              </a>
              <p>Dental Health:</p>
              <a
                href="https://www.niagararegion.ca/living/health_wellness/dental/default.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/living/health_wellness/dental/default.aspx
              </a>
              <p>Mental Health:</p>
              <a
                href="https://www.niagararegion.ca/living/health_wellness/mentalhealth/default.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/living/health_wellness/mentalhealth/default.aspx
              </a>
              <p>Quitting Smoking:</p>
              <a
                href="https://www.niagararegion.ca/health/substances/tobacco/quitting-smoking.aspx"
                target="_blank"
              >
                https://www.niagararegion.ca/health/substances/tobacco/quitting-smoking.aspx
              </a>
            </Col>
            <Col lg="6">
              <h2>Crisis Intervention</h2>
              <p>
                Distress Center Niagara: In Grimsby/ Beamsville, call
                905-563-6674, or go to{" "}
                <a href="http://distresscentreniagara.com/" target="_blank">
                  http://distresscentreniagara.com/
                </a>
              </p>
              <p>
                COAST Niagara (Crisis Outreach and Support Team): 1-866-550-5205
                or{" "}
                <a href="http://coastniagara.ca/" target="_blank">
                  http://coastniagara.ca/
                </a>
              </p>
              <p>
                COAST provides services to people in the Niagara Region who are
                in crisis and have a mental health concern. The program is a
                partnership between Distress Centre Niagara, Canadian Mental
                Health Association Niagara, Niagara Health System, Niagara
                Regional Police Services.
              </p>
              <h2>Nutrition</h2>
              <a
                href="http://healthycanadians.gc.ca/eating-nutrition/"
                target="_blank"
              >
                http://healthycanadians.gc.ca/eating-nutrition/
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p>
                Our Dietician - The Dietitian will help you manage blood sugar
                while also eating well. During your appointment you will learn
                about carbohydrates, proteins and how to read labels. You will
                also learn about appropriate meal spacing and snacks if needed.{" "}
              </p>
              <p>
                Our Diabetic Nurse - The Diabetic Nurse provides guidance in
                managing blood glucose levels while working with patients to
                build competency to dealing with daily challenges of diabetes
                self-management. We also help to educate and assist patients on
                safe insulin therapy. The Diabetic Nurse promotes foot health
                through screening and education.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
