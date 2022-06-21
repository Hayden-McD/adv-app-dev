import React, { useState } from "react";
import HomepageContent from "../PageContents/HomepageContent";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      setUser(user.currentUser);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  });

  if (isLoggedIn) {
    return (
      <HomepageContent user={user}/>
    )
  }
}

export default Homepage;