import Link from "next/link";
import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.nav}>
      <Navbar expanded={expanded} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">logo</Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onClick={() => setExpanded(false)}>
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
              <Nav.Link href="/resources/">HealthMyself</Nav.Link>
              <NavDropdown title="Clinics" id="basic-nav-dropdown">
                <NavDropdown.Item href="/diabetes/">Diabetes</NavDropdown.Item>
                <NavDropdown.Item href="/food-clinics/">
                  Food Clinics
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
