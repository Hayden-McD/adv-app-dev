import React from "react";
import HomepageContent from "../PageContents/HomepageContent";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { loggedin_allowed, routes } from "./routePaths";

const Homepage = () => {
  const history = useHistory();

  return (
    <HomepageContent />
  )
}

export default Homepage;