import React from 'react';
import LoginPageContents from '../PageContents/LoginPageContents';

const LoginPage = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
    auth
}) => {
    return (
        <LoginPageContents
            authError={authError}
            isLoggedIn={isLoggedIn}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setAuthError={setAuthError}
            auth={auth}
        />
    );
};

export default LoginPage;
