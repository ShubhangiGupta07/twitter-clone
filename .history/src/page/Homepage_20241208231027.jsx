import React from "react";
import Login from "../Components/Login";
import Register from "../Components/";
import Step from "../Constants/appConstant";

const Homepage = () => {
    const [step, setStep] = React.useState(Step.Login);
    return <>{ step === Step.Login ? <Login /> : <Register />}</>;
};

export default Homepage;