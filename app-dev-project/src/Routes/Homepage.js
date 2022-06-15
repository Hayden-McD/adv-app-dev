import React from "react";
import { useAuth } from "../Components/AuthContext";
import HomepageContent from "../PageContents/HomepageContent";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { loggedin_allowed, routes } from "./routePaths";

const Homepage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  return (
    loggedIn && loggedin_allowed.includes(history.location.pathname) ? <HomepageContent /> : history.replace(routes.LOGIN)
  )
}

export default Homepage;