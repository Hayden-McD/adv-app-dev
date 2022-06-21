import React from 'react'
import SignupComponent from '../Components/SignupComponent'
import { Container } from 'react-bootstrap'

const SignupPageContents = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
    auth,
    user
}) => {
    return (
        <Container className='align-items-center justify-content-center'>
            <div className='w-80'>
                <SignupComponent
                    authError={authError}
                    isLoggedIn={isLoggedIn}
                    setUser={setUser}
                    setIsLoggedIn={setIsLoggedIn}
                    setAuthError={setAuthError}
                    auth={auth}
                    user={user}
                />
            </div>
        </Container>
    );
};

export default SignupPageContents