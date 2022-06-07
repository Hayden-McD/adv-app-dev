import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext'
import { Link } from 'react-router-dom';
import { routes } from "../Routes/routePaths";

const SignupComponent = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, error, loading } = useAuth();
    const [passwordError, setPasswordError] = useState(null)

    
    async function handleSubmit(e) {
        e.preventDefault()
        setPasswordError(null)
        const check = new RegExp('/^[A-Za-z0-9]\w{8,}$/') //more than 8 characters
        console.log(check.test(passwordRef.current.value))
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setPasswordError('Passwords do not match')
        }
        else if(check.test(passwordRef.current.value)) {
            setPasswordError('Enter A Password of 8 or More Characters')
        }
        else {
            await signup(emailRef.current.value, passwordRef.current.value)
            setPasswordError(null)
        }
        return
    }

  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className='w-100' type="submit">Sign up</Button>
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