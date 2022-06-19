import React, { useEffect, useState, useCallback } from 'react'
import { query, onSnapshot, doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Game = ({ game }) => {
  // const gameid = game.id;
  // const [gane, setGame] = useState([])
  const playerIds = []
  const playerDocs = game.players.forEach((ex) => {
    playerIds.push(ex)
  });

  console.log(game.id)
  console.log(playerIds)

  function joinGame() {
    if (playerIds.includes(auth.currentUser.uid)) {
      console.log("you are in the game already")
    } else {
      playerIds.push(auth.currentUser.uid)
      console.log(playerIds)

      //append userid games/gameid/players
      updateDoc(doc(db, 'Games', game.id), {
        players: arrayUnion(auth.currentUser.uid)
    });
    console.log("you have been added to the game")
    }
  }

  return (
    <>
      {!game.gameOver && 
      <div className="game">
        <div className="gameName">
          {game.gameName}
          {/* players componet */}
        </div>
        <button onClick={joinGame}>Join</button>
      </div>}
    </>
  )
}

export default Game