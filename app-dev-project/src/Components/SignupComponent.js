import React, { useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/routePaths';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const SignupComponent = ({
    setAuthError,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    authError,
    auth,
    user
}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const displayNameRef = useRef();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        setAuthError(null);
        const check = new RegExp('/^[A-Za-z0-9]w{8,}$/'); //more than 8 characters
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setAuthError('Passwords do not match');
        } else if (check.test(passwordRef.current.value)) {
            setAuthError('Enter A Password of 8 or More Characters');
        } else {
            signup(emailRef.current.value, passwordRef.current.value);
            setAuthError(null);
        }
    }

    async function signup(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((User) => {
                    setUser(User.user);
                    updateProfile(User.user.uid, {
                        displayName: displayNameRef.current.value,
                    });
                })
                .then(() => {
                    setDoc(
                        doc(db, 'Users', user.uid),
                        {
                            displayName: displayNameRef.current.value,
                            uid: user.uid,
                            email: user.email,
                            gamesWon: 0,
                        },
                        { merge: true }
                    );
                }).finally(() => {
                    history.replace(routes.HOME);
                });
        } catch (error) {
            setAuthError(error.message);
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4' data-testid="signupComponent-title">Sign Up</h2>
                    {authError ? (
                        <Alert variant='danger'>{authError}</Alert>
                    ) : null}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email' data-testid="signupComponent-emailInput">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id='displayName' data-testid="signupComponent-displayName">
                            <Form.Label>Display Name:</Form.Label>
                            <Form.Control ref={displayNameRef} required />
                        </Form.Group>
                        <Form.Group id='password' data-testid="signupComponent-passwordInput">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id='password-confirm' data-testid="signupComponent-passwordConfInput">
                            <Form.Label>Confirm password:</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordConfirmRef}
                                required
                            />
                        </Form.Group>
                        {/* <Button disabled={loading} className='w-100' type="submit">Sign up</Button> */}
                        <Button className='w-100' type='submit' data-testid="signupComponent-button">
                            Sign up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2' data-testid="signupComponent-loginText">
                Already have an account? <Link to={routes.LOGIN}> Login </Link>
            </div>
        </>
    );
};

export default SignupComponent;
