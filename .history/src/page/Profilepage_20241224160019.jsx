import React from "react";

const Profilepage = () => {
    React.useEffect(()=>{
        const getData = async()=>{
        const data = await fetch("http://dummyjson.com/products");
        const response = await data.json();
        }
    },[])
    return (<>
    </>);
};

export default Profilepage;