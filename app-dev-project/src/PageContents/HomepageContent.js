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
            .then(
                (res) => {
                    res.forEach((doc) => {
                        gamesArray.push({ ...doc.data(), id: doc.id });
                    });
                    setLoadError(null);
                },
                (error) => {
                    throw new error('Game Loading Error.');
                }
            )
            .catch((err) => {
                console.log(err);
                setLoadError(err.message);
            });
        await setGames(gamesArray);
        setIsLoading(false);
        return;
    }, []);

    useEffect(() => {
        getGame()
            .then(() => {
                if (games.length > 0) {
                    setGamesReady(true);
                } else {
                    setGamesReady(false);
                }
            })
            .catch((err) => {
                setLoadError(err.message);
                setGamesReady(false);
            });
    }, [getGame, games]);

    return (
        <div className='container'>
            {isLoading ? (
                <LoadingPage isLoggedIn={isLoggedIn} />
            ) : (
                <div className='gameContainer'>
                    {games.map((game, index) => {
                        return (
                            <Game
                                game={game}
                                key={index}
                                auth={auth}
                                loadError={loadError}
                                gamesReady={gamesReady}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default HomepageContent;
