import React, { useState } from "react";
import HomepageContent from "../PageContents/HomepageContent";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { routes } from "./routePaths";
import LoginPage from "./LoginPage";

const Homepage = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser

onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(true);
    }
  });

  if (user) {
    return (
      <HomepageContent />
    )
  } else {
    //redirect
  }

}

export default Homepage;