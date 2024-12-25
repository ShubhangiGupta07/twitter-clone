import React from "react";

const userContext = React.createContext(null);

const userProvider = (props)=>{
    React.useEffect(()=>{
        const getData(){
          const data = fetch(`http://localhost:4000/users/${propTypes.id}`);
        }
        getData();
    });
}