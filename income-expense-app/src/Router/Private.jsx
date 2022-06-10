import React from "react";
import { Navigate } from "react-router-dom";
const Private = ({ children }) => {
  // let user;
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    let u = localStorage.getItem("user");
    u = JSON.parse(u);
    setUser(u);
  }, [user]);

  console.log("user", user);
  return user === false ? <Navigate to="/auth" replace /> : children;
};

export default Private;
