import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "../../../public/logo.jpg";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Navbar expand="lg" className="fixed-top">
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
                <NavDropdown.Item href="/mission/">
                  Mission Statement
                </NavDropdown.Item>
                <NavDropdown.Item href="/family-health/">
                  Family Health Organization
                </NavDropdown.Item>
                <NavDropdown.Item href="/privacy/">
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/team/">Our Team</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/resources/">Patient Resources</Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://portal.healthmyself.net/lincolnmedicalcentre/#/"
              >
                HealthMyself
              </Nav.Link>
              <NavDropdown title="Clinics" id="basic-nav-dropdown">
                <NavDropdown.Item href="/diabetes/">Diabetes</NavDropdown.Item>
                <NavDropdown.Item href="/flu-clinics/">
                  Flu Clinics
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
