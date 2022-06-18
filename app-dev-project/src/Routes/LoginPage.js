import React from "react";
import LoginPageContents from "../PageContents/LoginPageContents";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { loggedin_notallowed } from "./routePaths";

const LoginPage = () => {
    const history = useHistory();
    return (
      <LoginPageContents />
    )
};

export default LoginPage;
