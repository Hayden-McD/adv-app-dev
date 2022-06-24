import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

const CreateGameComponent = ({ authError, isLoggedIn, user, auth }) => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const [gameCreated, setGameCreated] = useState("");
    const gameName = "";

    async function handleSubmit(e, game) {
        setGameCreated("Game is being created... please wait")
        e.preventDefault();

        game = await addDoc(collection(db, 'Games'), {
            gameName: nameRef.current.value,
            password: passwordRef.current.value,
            createdBy: auth.currentUser.displayName,
            joinable: true,
            gameOver: false
        });
        await setDoc(doc(db, 'Games', game.id, 'players', auth.currentUser.uid),
        {
            name: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
        });
        history.replace('/')
    }

    return (
        <Card className='align-items-center justify-content-center'>
            <Card.Body>
                <h2 className='text-center mb-4'>Create a game</h2>
                {authError && <Alert variant='danger'>{authError}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='game-name' data-testid="createGameComponent-name">
                        <Form.Label>Game Name:</Form.Label>
                        <Form.Control ref={nameRef} required data-testid="createGameComponent-nameInput"/>
                    </Form.Group>
                    <Form.Group id='password' data-testid="createGameComponent-password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type='password' ref={passwordRef} data-testid="createGameComponent-passwordInput"/>
                    </Form.Group>
                    {gameCreated && <Alert variant='info'>{gameCreated}</Alert>}
                    <Button className='w-100' type='submit' data-testid="createGameComponent-button">
                        Create Game
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default CreateGameComponent;
