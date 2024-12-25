import React from "react";

const userContext = React.createContext(null);

const userProvider = ()=>{
    React.useEffect(()=>{
        async getData(){
          const data = fetch(`http://localhost:4000/users/${propTypes.id}`);
        }
        getData();
    });
}