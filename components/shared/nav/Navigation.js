import Link from "next/link";
import { useRef, useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "../../../public/logo.jpg";

const Navigation = () => {
  const [visible, setVisible] = useState(true);

  const idRef = useRef(null);

  const removeBanner = () => {
    setVisible((prev) => !prev);
    if (idRef.current) {
      idRef.current.classList.add("fixed-top");
    }
  };

  return (
    <div className={styles.nav}>
      {visible && (
        <div className="banner">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <p onClick={removeBanner}>
                  We no longer offer virtual care appointments to non-rostered patients. <sup>X</sup>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      <Navbar expand="lg" id="nav" ref={idRef}>
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src={logo} className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/mission/">Mission Statement</NavDropdown.Item>
                <NavDropdown.Item href="/family-health/">Family Health Organization</NavDropdown.Item>
                <NavDropdown.Item href="/privacy/">Privacy Policy</NavDropdown.Item>
                <NavDropdown.Item href="/team/">Our Team</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/resources/">Patient Resources</Nav.Link>
              <Nav.Link target="_blank" href="https://portal.healthmyself.net/lincolnmedicalcentre/#/">
                HealthMyself
              </Nav.Link>
              <NavDropdown title="Clinics" id="basic-nav-dropdown">
                <NavDropdown.Item href="/diabetes/">Diabetes</NavDropdown.Item>
                <NavDropdown.Item href="/flu-clinics/">Flu Clinics</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/newsletter/">Newsletter</Nav.Link>
              <Nav.Link href="/contact/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
