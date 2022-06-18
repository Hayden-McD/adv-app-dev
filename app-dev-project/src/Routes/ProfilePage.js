import React, { useState } from "react";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProfilePage = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
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
      <div>ProfilePage</div>
    )
  } else {
    //redirect
  }
}

export default ProfilePage;