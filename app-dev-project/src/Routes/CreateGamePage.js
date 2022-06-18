import React, { useState } from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'
import LoadingPage from './LoadingPage';
import { loggedin_allowed, routes } from './routePaths';
import { useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const CreateGamePage = () => {
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
      <CreateGameComponent />
    )
  } else {
    //redirect
  }
}

export default CreateGamePage