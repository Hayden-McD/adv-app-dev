import React from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";

const CreateGameComponent = () => {
  return (
    <Card>
    <Card.Body>
      <h2 className="text-center mb-4">Create a game</h2>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <Form>
        <Form.Group id="game-name">
          <Form.Label>Game Name:</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Button className="w-100" type="submit">
          Create Game
        </Button>
      </Form>
    </Card.Body>
  </Card>
  )
}

export default CreateGameComponent