import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Step from "../Constants/appConstant";

const Homepage = () => {
    const [step, setStep] = React.useState(Step.Login);
    const 
    return <>{ step === Step.Login ? <Login onChange={handleChange} /> : <Register />}</>;
};

export default Homepage;