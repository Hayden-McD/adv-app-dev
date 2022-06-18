import React, { useState } from "react";
import HomepageContent from "../PageContents/HomepageContent";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const user = auth.currentUser

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
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