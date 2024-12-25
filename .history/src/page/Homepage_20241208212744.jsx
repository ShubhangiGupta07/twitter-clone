import React from "react";
import Login from "../Components/Login";

const Homepage = () => {
    const [step, setStep] = React.useState("LOGIN");
    return <>{ isLogin ? <Login />}</>;
};

export default Homepage;