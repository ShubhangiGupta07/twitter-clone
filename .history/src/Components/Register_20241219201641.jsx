import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/style.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = (props) => {
  const { onChange } = props;
  const [ userName, setUserName ] = React.useState("");
  const [ pwd, setPassword ] = React.useState("");
  const [ confirmPwd, setConfirmPwd ] = React.useState("");

  const onSubmit = async () => {
    try {
        const form = new FormData();
        form.set("userName",userName);
        form.set("password",pwd);
        form.set("confirmPassword",confirmPwd);
      const response = await fetch(
        "http://localhost:4000/signup/user",
        {
        headers:{"content-type":"application/json"},
        method:"POST",
        body: JSON.stringify({
          userName: userName,
          password: pwd,
          confirmPassword: confirmPwd,
        }),
    });
      const data = await response.json();
      console.log("logs the data", data);
      setUserName("");
      setPassword("");
      setConfirmPwd("");
      handlec
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
          <h3>X Register</h3>
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
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Confirm Password
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="Password"
              onChange={(e) => {
                setConfirmPwd(e.currentTarget.value);
              }}
              value={confirmPwd}
            />
          </InputGroup>
          <Button variant="primary" onClick={onSubmit}>Register</Button>
          <a
            href="javascript:void(0)"
            onClick={() => {
              onChange("LOGIN");
            }}
            style={{ paddingLeft: "10px" }}
          >
            Login Now
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
