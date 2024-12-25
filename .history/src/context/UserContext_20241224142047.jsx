import React from "react";

const UserContext = React.createContext(null);

const UserProvider = (props) => {
    const [response, setResponse] = React.useState(undefined);
  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:4000/users/${props.id}`);
      const response = await data.json();
      setResponse(response);
    };
    getData();
  });

  return(
    <UserContext.Provider value={response}>
        {React.Children}
    </UserContext.Provider>
  );
};

export default userProvider;