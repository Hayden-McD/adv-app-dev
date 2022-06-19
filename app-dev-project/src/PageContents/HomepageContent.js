import React, { useEffect, useState, useCallback } from 'react'
import { collection, doc, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import Game from '../Components/Game';
import LoadingPage from "../Routes/LoadingPage"

const HomepageContent = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGame = useCallback(async () => {
    let gamesArray = []
    const q = query(collection(db, "Games"));
    await getDocs(q).then((res) => {
      res.forEach((doc) => {
        gamesArray.push({ ...doc.data(), id: doc.id })
      })
    })
      .catch((err) => {
        console.log(err)
      });
    setIsLoading(false);
    setGames(gamesArray);
    return;
  }, [])

  useEffect(() => {
    getGame()
  }, [getGame])

  return (
    <>
      {isLoading ?
        <LoadingPage /> :
        <div className='container'>
          <div className='gameContainer'>
            {
              games.map((game, index) => {
                return (
                  <Game game={game} key={index} />
                )
              })
            }
          </div>
        </div>
      }
    </>
  )
}

export default HomepageContent