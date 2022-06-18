import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../Routes/routePaths";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const LoginComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()
    login(emailRef.current.value, passwordRef.current.value);
  }

  async function login(email, password) {
    const res = await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.replace(routes.HOME)
      }).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      })
    return;
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}

          <Alert variant="danger"></Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {/* <Button disabled={loading} className="w-100" type="submit"> */}
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to={routes.SIGNUP}> Sign Up </Link>
      </div>
    </>
  );
};

export default LoginComponent;