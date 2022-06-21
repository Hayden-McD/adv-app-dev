import React from 'react';
import LoginPageContents from '../PageContents/LoginPageContents';

const LoginPage = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
}) => {
    return (
        <LoginPageContents
            authError={authError}
            isLoggedIn={isLoggedIn}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setAuthError={setAuthError}
        />
    );
};

export default LoginPage;
