import React from 'react'
import { useAuth } from "../Components/AuthContext";
import SignupPageContents from '../PageContents/SignupPageContents';
import LoadingPage from './LoadingPage';

const SignupPage = () => {
  const { loggedIn } = useAuth()

  return (
    !loggedIn ? <SignupPageContents /> : <LoadingPage />
  )
}

export default SignupPage