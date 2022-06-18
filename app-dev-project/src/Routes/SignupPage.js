import React from 'react'
import SignupPageContents from '../PageContents/SignupPageContents';
import LoadingPage from './LoadingPage';
import { loggedin_notallowed } from './routePaths';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const history = useHistory();

  return (
    <SignupPageContents />
  )
}

export default SignupPage