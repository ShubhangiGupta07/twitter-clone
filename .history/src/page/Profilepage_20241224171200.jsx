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

  React.useEffect(()=>{
    const script = document.createElement()
  })

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap:"wrap",
      }}
    >
      {data
        ? data.products.map((item) => (
            <>
              <div>{item.title}</div>
              <img
                src={item.thumbnail}
                alt="image not found"
                width="100px"
                height="100px"
              />
              <div>{item.price}</div>
              <button>Buy Rs{item.price}</button>
            </>
          ))
        : ""}
    </div>
  );
};

export default Profilepage;
