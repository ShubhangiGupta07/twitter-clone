import React from "react";

const Profilepage = () => {
    const [data, setData] = Re
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