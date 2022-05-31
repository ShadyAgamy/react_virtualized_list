import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function NavBar({ link, linkText }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item>
            <Link to={link} className="nav-link">
              {linkText}
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
