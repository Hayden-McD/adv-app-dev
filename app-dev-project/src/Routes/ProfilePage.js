import React from "react";
import { useAuth } from "../Components/AuthContext";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { loggedin_allowed, routes } from "./routePaths";

const ProfilePage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  return (
    loggedIn && loggedin_allowed.includes(history.location.pathname) ? <div>ProfilePage</div> : history.replace(routes.LOGIN)
  )

}

export default ProfilePage;