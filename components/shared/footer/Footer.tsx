import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import styles from "../footer/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg="3">
              <h5>Address</h5>
              <p>
                4413 Ontario St. Beamsville,
                <br />
                ON L3J 0A4
              </p>
            </Col>
            <Col lg="3">
              <h5>Clinic Hours</h5>
              <p>Monday to Friday 8:00am-4:00pm</p>
            </Col>
            <Col lg="3">
              <h5>Urgent Care Clinic for LMC Patients </h5>
              <p>Monday to Friday 5:00pm-8:00pm</p>
              <p>Saturday & Sunday 8:00am-10:30am</p>
            </Col>
            <Col lg="3">
              <h5>Contact</h5>
              <p>
                Phone: <a href="tel:(905) 563 - 1212">(905) 563 - 1212</a>
              </p>
              <p>Fax: (905) 563 - 4404</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p className="infused">
                <br />
                <br />
                <a target="_blank" href="https://infused.agency">
                  SEO Niagara
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
