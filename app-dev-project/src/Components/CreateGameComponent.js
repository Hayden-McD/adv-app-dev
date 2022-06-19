import React, { useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"
import { getAuth } from 'firebase/auth';

const CreateGameComponent = () => {
  const nameRef = useRef();
  const enablePasswordRef = useRef();
  const passwordRef = useRef();
  const auth = getAuth();
  const user = auth.currentUser

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "Games"), {
        gameName: nameRef.current.value,
        passwordEnabled: enablePasswordRef.current.value,
        password: passwordRef.current.value,
        createdBy: user.displayName,
        joinable: true,
        gameOver: false,
        players: [user.displayName]
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Card
      className="d-felx align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <Card.Body>
        <h2 className="text-center mb-4">Create a game</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="game-name">
            <Form.Label>Game Name:</Form.Label>
            <Form.Control ref={nameRef} required />
          </Form.Group>

          {/*  */}
          <Form.Group id="password-switch">
            <Form.Label>Enable Password?</Form.Label>
            <Form.Check type="switch" ref={enablePasswordRef} />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" ref={passwordRef} />
          </Form.Group>
          <Button className="w-100" type="submit">
            Create Game
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateGameComponent;
