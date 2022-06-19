import React from 'react'
import SignupPageContents from '../PageContents/SignupPageContents';
import { auth } from '../firebase';


const SignupPage = () => {
  const user = auth.currentUser

  if (!user) {
    return (
      <SignupPageContents />
    )
  } else {

  }
}

export default SignupPage