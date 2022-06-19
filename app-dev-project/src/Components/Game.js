import React, { useEffect, useState, useCallback } from 'react'
import { query, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Game = ({ game }) => {
  // const gameid = game.id;
  // const [gane, setGame] = useState([])
  const playerIds = []
  const playerDocs = game.players.forEach((ex) => {
    playerIds.push(ex)
  });

  console.log(playerIds)

  return (
    <>
      {!game.gameOver && 
      <div className="game">
        <div className="gameName">
          {game.gameName}
          {/* players componet */}
        </div>
        <button>Join</button>
      </div>}
    </>
  )
}

export default Game