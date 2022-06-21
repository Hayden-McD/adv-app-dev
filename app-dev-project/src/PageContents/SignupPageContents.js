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
                />
            </div>
        </Container>
    );
};

export default SignupPageContents