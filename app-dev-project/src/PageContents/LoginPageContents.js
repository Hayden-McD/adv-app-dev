import React from "react";
import { Container } from "react-bootstrap";
import LoginComponent from "../Components/LoginComponent";

const LoginPageContents = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
}) => {
    return (
        <Container className='d-felx align-items-center justify-content-center'>
            <div className='w-80'>
                <LoginComponent
                    authError={authError}
                    isLoggedIn={isLoggedIn}
                    setUser={setUser}
                    setIsLoggedIn={setIsLoggedIn}
                    setAuthError={setAuthError}
                />
            </div>
        </Container>
    );
};

export default LoginPageContents