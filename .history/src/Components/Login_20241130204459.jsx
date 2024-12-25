import React from "react";
import { CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import style from "../styles/style"

const Login = () => {
  return (
    <div className="container">
      <Card>
        <CardTitle
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          X Login
        </CardTitle>
      </Card>
    </div>
  );
};

export default Login;
