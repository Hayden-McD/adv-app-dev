import React from 'react';
import SignupPageContents from '../PageContents/SignupPageContents';

const SignupPage = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
    auth
}) => {
    return (
        <SignupPageContents
            authError={authError}
            isLoggedIn={isLoggedIn}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setAuthError={setAuthError}
            auth={auth}
        />
    );
};

export default SignupPage;
