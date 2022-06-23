import React, { useRef, useState } from "react";
import { doc, updateDoc, arrayUnion, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Game = ({ game, auth }) => {
  const playerIds = [];
  const playerNames = [];
  const passwordRef = useRef();
  const [isError, setIsError] = useState(null);
  const history = useHistory();

  game.players.forEach((player) => {
    playerIds.push(player.uid);
    playerNames.push(player.name)
  });

  async function addPlayer() {
    const docRef = await updateDoc(doc(db, 'Games', game.id), { 
    players: arrayUnion([{uid: auth.currentUser.uid, name: auth.currentUser.displayName }])
  }, 
  {merge: true})
  }

  function joinGame() {
    setIsError(false);
    if (passwordRef.current.value === game.password) {
      setIsError(false);
      console.log("correct password");
      if (playerIds.includes(auth.currentUser.uid)) {
        console.log("User is already in the game");
        setIsError("You are already in this game")
      } else {
          addPlayer();
        console.log("User has Joined the game");
        history.replace(`/game/${game.id}`)
      }
    } else if (passwordRef.current.value === "") {
      setIsError("Password empty");
      console.log(isError)
    } else {
      setIsError("Incorrect password");
      console.log(isError)
    }
  }

  return (
    <>
      {!game.gameOver && (
        <div className="game">
          <div className="gameName">{game.gameName}</div>
          <div className="gamePlayers">
            <div>Players: </div>
            {playerNames.map((playerNames) => {
              return (
                <p key={playerNames}>{playerNames}</p>
              );
            })}
          </div>

          <Form>
            <Form.Group id="game-name">
              <Form.Label>Password:</Form.Label>
              <Form.Control ref={passwordRef} required />
              {isError && <Alert variant="danger">{isError}</Alert>}
            </Form.Group>
          </Form>
          <button onClick={joinGame}>Join</button>
        </div>
      )}
    </>
  );
};

export default Game;
