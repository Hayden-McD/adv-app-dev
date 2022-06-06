import React from "react";
import { useHistory } from "react-router-dom";

const ProfilePage = ({user}) => {
  const history = useHistory();

  if (!user) {
    return history.push("/login");
  } else {
    return ( 
    <div>ProfilePage</div>
    )}
};

export default ProfilePage;