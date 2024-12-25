import React from "react";
import Login from "../Components/Login";

const Homepage = () => {
    const [isLogin, setIsLogin] = React.useState(false);
    return <Login />;
};

export default Homepage;