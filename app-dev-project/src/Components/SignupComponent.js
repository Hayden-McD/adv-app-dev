import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from "../Routes/routePaths";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase"

const SignupComponent = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const displayNameRef = useRef();
    const [passwordError, setPasswordError] = useState(null)
    const auth = getAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        setPasswordError(null)
        const check = new RegExp('/^[A-Za-z0-9]\w{8,}$/') //more than 8 characters
        console.log(check.test(passwordRef.current.value))
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setPasswordError('Passwords do not match')
        }
        else if (check.test(passwordRef.current.value)) {
            setPasswordError('Enter A Password of 8 or More Characters')
        }
        else {
            await signup(emailRef.current.value, passwordRef.current.value)
            setPasswordError(null)
        }
        return
    }

    async function signup(email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: displayNameRef.current.value
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
            .finally(() => {
                addUserToDB();
                history.replace(routes.HOME)
            })
    }

    function addUserToDB() {
        setDoc(doc(db, 'Users', auth.currentUser.uid), {
            displayName: displayNameRef.current.value,
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            gamesWon: 0
        });
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                    <Alert variant="danger"></Alert>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="displayName">
                            <Form.Label>Display Name:</Form.Label>
                            <Form.Control ref={displayNameRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        {/* <Button disabled={loading} className='w-100' type="submit">Sign up</Button> */}
                        <Button className='w-100' type="submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to={routes.LOGIN}> Login </Link>
            </div>
        </>
    )
}

export default SignupComponent