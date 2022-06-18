import React, { useState }  from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const CreateGamePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState()
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