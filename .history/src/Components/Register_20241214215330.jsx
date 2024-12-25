import React from "react";

const Register = () => {
    const {} = pro
    return (
        <div className="container">
          <Card>
            <Card.Title
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>X Login</h3>
            </Card.Title>
            <Card.Body>
              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Username
                </InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Password
                </InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type="Password"
                />
              </InputGroup>
              <Button variant="primary">Login</Button>
              <a href="javascript:void(0)" onClick={()=>{onChange("REGISTER");}} style={{paddingLeft: "10px"}}>Register here</a>
            </Card.Body>
          </Card>
        </div>
      );
};

export default Register;