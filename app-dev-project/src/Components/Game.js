import React from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';

const Game = ({ game, auth }) => {
    const playerIds = [];
    game.players.forEach((ex) => {
        playerIds.push(ex);
    });

    function joinGame() {
        if (playerIds.includes(auth.currentUser.uid)) {
            console.log('User is already in the game');
        } else {
            updateDoc(doc(db, 'Games', game.id), {
                players: arrayUnion(auth.currentUser.displayName),
            });
            console.log('User has Joined the game');
        }
    }

    return (
        <div className='gameName'>
            <div className='gamePlayers'>
                <div>Players: </div>
            </div>
            <button onClick={joinGame}>Join</button>
        </div>
    );
};

export default Game;
