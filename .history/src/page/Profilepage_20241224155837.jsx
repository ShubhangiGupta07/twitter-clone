import React from "react";

const Profilepage = () => {
    React.useEffect(()=>{
        const getData = async()=>{
        const data = await fetch("http://dummyjson.com/products");
        }
    },[])
    return (<>
    </>);
};

export default Profilepage;