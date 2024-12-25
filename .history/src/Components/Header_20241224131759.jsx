import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <Navbar style={{backgroundColor:"green", height:"50px"}}>
      <Container>
        <Navbar.Brand href="#home">Twitter Clone</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{display:"flex", jus}}>
            Signed in as: <a href="#login">{props.userName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
