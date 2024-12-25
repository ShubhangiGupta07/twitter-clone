import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import {Step} from "../Constants/appConstant";

const Homepage = () => {
    const [step, setStep] = React.useState("LOGIN");
    
    return (<>{ step === "LOGIN" ? (<Login onChange={handleChange} />) : (<Register onChange={(state)=>{setStep(st)}} />)}</>);
};

export default Homepage;