import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const [step, setStep] = React.useState("LOGIN");
    const navigate = useNavigate();

    React.useEffect(()=>{
        async function getAuthData(){
            const cookie = document.cookie.split("=");
            const data = await fetch("http://localhost:4000/user/auth/check",{
                headers:{
                    authorization: cookie[1],
                },
            });
            const response = await data.json();
            navigate
        }
        getAuthData();
    },[]);
    
    return (<>{ step === "LOGIN" ? (<Login onChange={(state)=>{setStep(state);}} />) : (<Register onChange={(state)=>{setStep(state);}} />)}</>);
};

export default Homepage;