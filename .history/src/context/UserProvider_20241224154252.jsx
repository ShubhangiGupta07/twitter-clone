import React from "react";
import { UserContext } from "./UserContext";

class UserProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      response:undefined
    }
  }
  
  componentDidMount(){

  }
  React.useEffect(() => {
   
    getData();
  }, []);

  return (
    <UserContext.Provider value={response}>
      {React.Children}
    </UserContext.Provider>
  );
};

export default UserProvider;
