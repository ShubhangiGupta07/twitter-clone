import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/style.css"

const Login = () => {
  return (
    <div className="container">
      <Card>
        <Card.Title>
          X Login
        </Card.Title>
        <Card.Body>
             <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
