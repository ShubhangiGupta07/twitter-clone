import React from "react";

const Profilepage = () => {
    const [data, setData] = React.useState(undefined);
    React.useEffect(()=>{
        const getData = async()=>{
        const data = await fetch("http://dummyjson.com/products");
        const response = await data.json();
        setData(response);
        };
        getData();
    },[]);

 
    return (<>
    </>);
};

export default Profilepage;