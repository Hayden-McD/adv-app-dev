import React from "react";
import { useAuth } from "../Components/AuthContext";
import LoginPageContents from "../PageContents/LoginPageContents";
import LoadingPage from "./LoadingPage";
import { useHistory } from "react-router-dom";
import { loggedin_notallowed } from "./routePaths";

const LoginPage = () => {
    const { loggedIn } = useAuth();
    const history = useHistory();
    return (
      !loggedIn && loggedin_notallowed.includes(history.location.pathname) && <LoginPageContents />
    )
};

export default LoginPage;
