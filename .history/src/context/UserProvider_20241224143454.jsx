import React from "react";

const UserContext = React.createContext(null);

const UserProvider = (props) => {
    const [response, setResponse] = React.useState(undefined);
  React.useEffect(() => {
    const getData = async () => {
      try{
      const data = await fetch(`http://localhost:4000/users/${props.id}`);
      const response = await data.json();
      setResponse(response);
      }catch(err){
        console
      }
    };
    getData();
  },[]);

  return(
    <UserContext.Provider value={response}>
        {React.Children}
    </UserContext.Provider>
  );
};

export default UserProvider;