import React from "react";
import {Step} from "../Constants/appConstant";

const Homepage = () => {
    const [step, setStep] = React.useState("LOGIN");
    
    return (<>{ step === "LOGIN" ? (<Login onChange={(state)=>{setStep(state);}} />) : (<Register onChange={(state)=>{setStep(state);}} />)}</>);
};

export default Homepage;