import React from "react";
import LoginPageContents from "../PageContents/LoginPageContents";
import { auth } from "../firebase";

const LoginPage = () => {
    const user = auth.currentUser

    if (!user) {
      return (
        <LoginPageContents />
      )
    } else {

    }
};

export default LoginPage;