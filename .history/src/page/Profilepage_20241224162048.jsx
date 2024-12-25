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
            <div style={{display:"flex"}}>
              <div>{item.title}</div>
              <img src={item.thumbnail} alt="image not found" width="100px" height="100px" />
              <div>{item.price}</div>
              <button>Buy Rs{it}</button>
            </div>
        ))
        : ""}
    </>
  );
};

export default Profilepage;
