import React from "react";
import { UserContext } from "./UserContext";

class UserProvider = (props) => {
  const [response, setResponse] = React.useState(undefined);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(`http://localhost:4000/users/${props}`, {
          headers: {
            authorization: document.cookie.split("=")[1],
          },
        });
        const response = await data.json();
        setResponse(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <UserContext.Provider value={response}>
      {React.Children}
    </UserContext.Provider>
  );
};

export default UserProvider;
