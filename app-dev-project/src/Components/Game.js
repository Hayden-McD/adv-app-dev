import React, { useEffect, useState, useCallback } from 'react'
import { query, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Game = ({ game }) => {
  // const gameid = game.id;
  // const [gane, setGame] = useState([])
  const playerIds = []
  const playerDocs = game.players.forEach((ex) => {
    playerIds.push(ex.id)
  });
  console.log(playerIds)
  // const [players, setPlayers] = useState([])
  // const getPlayers = useCallback(async (playerid) => {
  //   const gameRef = doc(db, "Players", playerid);
  //   const gameSnap = await getDoc(gameRef);
  //   if (gameSnap.exists()) {
  //     console.log("Document data:", gameSnap.data());
  //     setGame(gameSnap.data())
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }, [db])
  // useEffect(() => {
  //   getPlayers(gameid)
  // }, [getPlayers, gameid])
  // useEffect(() => {
  //   console.log(xq)
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     let playersArray = []
  //     const data = querySnapshot
  //     console.log(data)
  //     data.map((player) => {
  //       console.log(player)
  //     })
  //     setPlayers(playersArray)
  //     //console.log(playersArray)
  //   })
  //   return () => unsub()
  // }, [])

  return (
    <div className="game">
      <div className="gameName">
        {game.gameName}
        {/* players componet */}
      </div>
      <button>Join</button>
    </div>
  )
}

export default Game