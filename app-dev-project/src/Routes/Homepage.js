import React from "react";
import { useAuth } from "../Components/AuthContext";
import HomepageContent from "../PageContents/HomepageContent";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { routes } from "./routePaths";

const Homepage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  if(!loggedIn) {
    history.replace(routes.SIGNUP)
  }
  return (
    loggedIn ? <HomepageContent /> : <LoadingPage />
  )
}

export default Homepage;