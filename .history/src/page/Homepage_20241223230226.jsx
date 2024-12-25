import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [step, setStep] = React.useState("LOGIN");
  const [response, setResponse] = React.useState(undefined);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getAuthData() {
      try {
        const cookie = document.cookie.split("=");
        if(cookie.length>0)
        const data = await fetch("http://localhost:4000/user/auth/check", {
          headers: {
            authorization: cookie[1],
          },
        });
        const response = await data.json();
        setResponse(response);
        navigate(`profile/${response.id}`);
      } catch (err) {
        navigate(`/`);
      }
    }
    getAuthData();
  }, []);

  if (!response) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        Loading....
      </h1>
    );
  }

  return (
    <>
      {step === "LOGIN" ? (
        <Login
          onChange={(state) => {
            setStep(state);
          }}
        />
      ) : (
        <Register
          onChange={(state) => {
            setStep(state);
          }}
        />
      )}
    </>
  );
};

export default Homepage;
