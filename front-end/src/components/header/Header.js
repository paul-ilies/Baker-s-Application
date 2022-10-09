import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { GiDoughRoller } from "react-icons/gi";
import "./header.css";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ margin: "0 auto" }}>
          <GiDoughRoller size="32" style={{ color: "#FF7518" }} />
          Baker's Calculator
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
