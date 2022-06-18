import React, { useState } from 'react'
import SignupPageContents from '../PageContents/SignupPageContents';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { routes } from './routePaths';

const SignupPage = () => {
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


  if (!user) {
    return (
      <SignupPageContents />
    )
  } else {
    //redirect
  }
}

export default SignupPage