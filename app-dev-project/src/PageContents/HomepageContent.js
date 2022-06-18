import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, onSnapshot, query  } from 'firebase/firestore'
import { db } from '../firebase'
import Game from '../Components/Game'

const HomepageContent = () => {
  const [games, setGames] = useState([])
  
  useEffect(() => {
    const q = query(collection(db, "Games"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let gamesArray = []
      querySnapshot.forEach((doc) => {
        gamesArray.push({ ...doc.data(), id: doc.id})
      })
      setGames(gamesArray)
    })
    return () => unsub()
  }, [])

  return (
    <div className="container">
    <div className="gameContainer">
      {
        games.map((game, index) => {
          return (
            <Game game={game} key={index}/>
          )
        })
      }
    </div>
  </div>
  )
}

export default HomepageContent