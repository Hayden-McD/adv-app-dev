import React from "react";
import { useAuth } from "../Components/AuthContext";
import LoginPageContents from "../PageContents/LoginPageContents";
import LoadingPage from "./LoadingPage";

const LoginPage = () => {
    const { loggedIn } = useAuth();
    return (
      !loggedIn ? <LoginPageContents /> : <LoadingPage />
    )
};

export default LoginPage;
