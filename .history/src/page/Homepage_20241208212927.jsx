import React from "react";
import Login from "../Components/Login";
export enum Step {
    Login 
}

const Homepage = () => {
    const [step, setStep] = React.useState();
    return <>{ isLogin ? <Login /> : }</>;
};

export default Homepage;