import React from "react";
import Login from "../Components/Login";
import Step from "../Constants/appConstant";

const Homepage = () => {
    const [step, setStep] = React.useState(Step.Login);
    return <>{ isLogin ? <Login /> : }</>;
};

export default Homepage;