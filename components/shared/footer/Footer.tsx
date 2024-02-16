import { Container, Row, Col } from "react-bootstrap";

import styles from "../footer/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg="4">
              <h5>Address</h5>
              <p>
                4413 Ontario St. Beamsville,
                <br />
                ON L3J 0A4
              </p>
            </Col>
            <Col lg="4">
              <h5>Hours</h5>
              <p>Monday to Thursday 8:30am - 8:00pm</p>
              <p>Friday 8:30am - 4:30pm</p>
              <p>Saturday & Sunday 8:00am - 11:00am</p>
            </Col>
            <Col lg="4">
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
                Website by Infused Agency <br />
                <a href="https://infused.agency" target="_blank" title="Niagara Web Design">
                  Niagara web design
                </a>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
