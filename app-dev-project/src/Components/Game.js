import React, { useRef, useState } from "react";
import { doc, updateDoc, collection, onSnapshot, setDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Game = ({ game, auth }) => {
  const passwordRef = useRef();
  const [isError, setIsError] = useState(null);
  const history = useHistory();
  const [players, setPlayers] = useState([]);
  const playerIDs = [];
  const playersArray = [];

  const playerRef = collection(db, 'Games', game.id, 'players');
  onSnapshot(playerRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      playersArray.push({ ...doc.data(), id: doc.id});
    })
    setPlayers(playersArray);
    return players;
  });

  function joinGame() {
    setIsError(false);
    if (passwordRef.current.value === game.password) {
      setIsError(false);
      console.log("correct password");
        addPlayer();
        console.log("User has Joined the game");
        history.replace(`/game/${game.id}`)
    } else if (passwordRef.current.value === "") {
      setIsError("Password empty");
      console.log(isError)
    } else {
      setIsError("Incorrect password");
      console.log(isError)
    }
  }

  // Adds the player to the game in firestore.
  async function addPlayer() {
    await setDoc(doc(db, 'Games', game.id, 'players', auth.currentUser.uid),
    {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
    });
  }

  return (
    <>
      {!game.gameOver && (
        <div className="game">
          <div className="gameName">{game.gameName}</div>
          <div className="gamePlayers">
            <div>Players: </div>
            {players.map((players) => {
              return (
                <p key={players.uid}>{players.name}</p>
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
