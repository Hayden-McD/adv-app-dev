import React from 'react';
import { auth } from '../firebase';

const GamePage = () => {
  const user = auth.currentUser


  if (user) {
    return (
      <h2>GamePage</h2>
    )
  } else {
    //redirect
  }
}

export default GamePage