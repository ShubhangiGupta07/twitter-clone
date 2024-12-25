import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Step from "../";

const Homepage = () => {
    const [step, setStep] = React.useState(Step.Login);
    return <>{ step === Step.Login ? <Login /> : <Register />}</>;
};

export default Homepage;