import React, { useCallback } from 'react'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Game = ({ game }) => {
  // const gameid = game.id;
  // const [gane, setGame] = useState([])
  const playerIds = []
  const playerDocs = game.players.forEach((ex) => {
    playerIds.push(ex)
  });

  function joinGame() {
    if (playerIds.includes(auth.currentUser.uid)) {
      console.log("User is already in the game")
    } else {
      updateDoc(doc(db, 'Games', game.id), {
        players: arrayUnion(auth.currentUser.displayName)
      });
      console.log("User has Joined the game")
    }
  }

  return (
    <>
      {!game.gameOver &&
        <div className="game">
          <div className="gameName">
            {game.gameName}
          </div>
          <div className="gamePlayers">
            <div>Players: </div>
          {
              playerIds.map((playerId) => {
                return (
                  // Change this to display name.
                  <p key={playerId}>{playerId}</p>
                )
              })
            }
          </div>
          <button onClick={joinGame}>Join</button>
        </div>}
    </>
  )
}

export default Game