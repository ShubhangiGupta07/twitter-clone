import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Twitter Clone</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Navbar.Text>
            Signed in as: <a href="#login">{props.userName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;