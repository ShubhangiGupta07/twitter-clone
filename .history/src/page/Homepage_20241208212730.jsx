import React from "react";
import Login from "../Components/Login";

const Homepage = () => {
    const [step, setStep] = React.useState("LOGIN");
    return <>{<Login /></>;
};

export default Homepage;