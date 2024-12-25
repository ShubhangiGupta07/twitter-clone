import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Homepage = () => {
    const [step, setStep] = React.useState("LOGIN");

    React.useEffect(()=>{
        async function getAuthData(){
            const data = await fetch("http://localghost")
        }
        getAuthData();
    },[]);
    
    return (<>{ step === "LOGIN" ? (<Login onChange={(state)=>{setStep(state);}} />) : (<Register onChange={(state)=>{setStep(state);}} />)}</>);
};

export default Homepage;