import React from "react";
import { useAuth } from "../Components/AuthContext";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { routes } from "./routePaths";

const ProfilePage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  if(!loggedIn) {
    history.replace(routes.SIGNUP)
  }
  return (
    loggedIn ? <div>ProfilePage</div> : <LoadingPage />
  )

}

export default ProfilePage;