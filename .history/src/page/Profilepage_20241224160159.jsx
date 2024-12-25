import React from "react";

const Profilepage = () => {
    const [data, setData] = React.useState();
    React.useEffect(()=>{
        const getData = async()=>{
        const data = await fetch("http://dummyjson.com/products");
        const response = await data.json();
        set
        }
    },[])
    return (<>
    </>);
};

export default Profilepage;