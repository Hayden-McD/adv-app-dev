import React, { useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/routePaths';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const LoginComponent = ({
    authError,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    setAuthError,
}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((User) => {
                setUser(User.user);
                setIsLoggedIn(true);
                if (isLoggedIn) {
                    history.replace(routes.HOME);
                } else {
                    throw new Error('User is not logged in');
                }
            })
            .catch((error) => {
                setUser(null);
                setIsLoggedIn(false);
                setAuthError(error.message);
            });
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {authError && (
                        <Alert variant='danger'>{authError}</Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>
                        {/* <Button disabled={loading} className="w-100" type="submit"> */}
                        <Button className='w-100' type='submit'>
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an account? <Link to={routes.SIGNUP}> Sign Up </Link>
            </div>
        </>
    );
};

export default LoginComponent;
