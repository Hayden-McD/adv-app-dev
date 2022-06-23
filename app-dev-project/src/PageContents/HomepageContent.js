import React, { useEffect, useState, useCallback } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import Game from '../Components/Game';
import LoadingPage from '../Routes/LoadingPage';

const HomepageContent = ({ authError, isLoggedIn, user, auth }) => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [gamesReady, setGamesReady] = useState(false);
    const [loadError, setLoadError] = useState(null);

    const getGame = useCallback(async () => {
        let gamesArray = [];
        const q = query(collection(db, 'Games'));
        await getDocs(q)
            .then((res) => {
                res.forEach((doc) => {
                    gamesArray.push({ ...doc.data(), id: doc.id });
                });
                setLoadError(null);
            }, 
            (error) => {
                throw new error('Game Loading Error.')
            })
            .catch((err) => {
                console.log(err);
                setLoadError(err.message);
            })
        await setGames(gamesArray);
        games.length > 0 ? setGamesReady(true) : setGamesReady(false);
        setIsLoading(false);
        return;
    }, []);

    useEffect(() => {
        getGame();
    }, [getGame]);

    return (
    <div className='container'>
        {isLoading ?? <LoadingPage />}
        {gamesReady ?? (
            <div className='gameContainer'>
                yayaya
                {games.map((game, index) => {
                    <Game game={game} key={index} auth={auth} />;
                })}
            </div>
        )}
    </div>
    );
};

export default HomepageContent;