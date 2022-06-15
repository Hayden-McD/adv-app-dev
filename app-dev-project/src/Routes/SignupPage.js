import React from 'react'
import { useAuth } from "../Components/AuthContext";
import SignupPageContents from '../PageContents/SignupPageContents';
import LoadingPage from './LoadingPage';
import { loggedin_notallowed } from './routePaths';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const { loggedIn } = useAuth()
  const history = useHistory();

  return (
    !loggedIn && loggedin_notallowed.includes(history.location.pathname) && <SignupPageContents />
  )
}

export default SignupPage