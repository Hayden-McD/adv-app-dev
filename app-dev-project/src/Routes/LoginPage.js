import React, { useState } from "react";
import LoginPageContents from "../PageContents/LoginPageContents";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const LoginPage = () => {
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
        <LoginPageContents />
      )
    } else {
      //redirect
    }
};

export default LoginPage;
