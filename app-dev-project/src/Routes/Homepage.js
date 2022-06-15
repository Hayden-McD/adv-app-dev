import React from "react";
import { useAuth } from "../Components/AuthContext";
import HomepageContent from "../Components/HomepageContent";
import LoadingPage from "./LoadingPage";

const Homepage = () => {
  const { loggedIn } = useAuth();

  return (
    loggedIn ? <HomepageContent /> : <LoadingPage />
  )
}

export default Homepage;