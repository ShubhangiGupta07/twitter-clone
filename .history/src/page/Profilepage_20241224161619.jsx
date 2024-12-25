import React from "react";

const Profilepage = () => {
  const [data, setData] = React.useState(undefined);
  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://dummyjson.com/products");
      const response = await data.json();
      setData(response);
    };
    getData();
  }, []);

  return (
    <>
      {data
        ? data.products.map((item) => (
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div>{item.title}</div>
              <img src={item.thi}
              <div>{item.price}</div>
            </div>
        ))
        : ""}
    </>
  );
};

export default Profilepage;
