import React from "react";

const userContext = React.createContext(null);

const userProvider = (props)=>{
    React.useEffect(()=>{
        const getData = async() => {
          const data = await fetch(`http://localhost:4000/users/${props.id}`);
        }
        getData();
    });
}