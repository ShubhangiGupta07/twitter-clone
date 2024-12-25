import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/style.css";
import InputGroup from "react-bootstrap/";

const Login = () => {
  return (
    <div className="container">
      <Card>
        <Card.Title>
          X Login
        </Card.Title>
        <Card.Body>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
