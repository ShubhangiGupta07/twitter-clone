import React from "react";
import Login from "../Components/Login";
export enum Step {
    Login = "LOGIN",
    Register = "REGISTER"
}

const Homepage = () => {
    const [step, setStep] = React.useState(Step.Login);
    return <>{ isLogin ? <Login /> : }</>;
};

export default Homepage;