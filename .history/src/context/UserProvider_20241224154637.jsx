import React from "react";
import { UserContext } from "./UserContext";

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: undefined,
    };
  }

  getData = async () => {
    try {
      const data = await fetch(`http://localhost:4000/users/${props}`, {
        headers: {
          authorization: document.cookie.split("=")[1],
        },
      });
      const response = await data.json();
      this.setState({response:response});
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <UserContext.Provider value={response}>
        {React.Children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
