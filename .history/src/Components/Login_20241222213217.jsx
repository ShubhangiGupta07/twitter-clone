import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/style.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = (props) => {
  const {onChange} = props;
  const [ userName, setUserName ] = React.useState("");
  const [ pwd, setPassword ] = React.useState("");

  const onSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/login/user",
        {
        headers:{"content-type":"application/json"},
        method:"POST",
        body: JSON.stringify({
          userName: userName,
          password: pwd,
          confirm
        }),
    });
      const data = await response.json();
      console.log("logs the data", data);
      setUserName("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

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
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
              value={userName}
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
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              value={pwd}
            />
          </InputGroup>
          <Button variant="primary"  onClick={onSubmit}>Login</Button>
          <a href="javascript:void(0)" onClick={()=>{onChange("REGISTER");}} style={{paddingLeft: "10px"}}>Register here</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
