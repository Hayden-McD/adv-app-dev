import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { routes, loggedin_allowed } from './routePaths';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const GamePage = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });


  if (user) {
    return (
      <h2>GamePage</h2>
    )
  } else {
    //redirect
  }
}

export default GamePage