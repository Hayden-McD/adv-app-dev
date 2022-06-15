import React from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'
import { useAuth } from "../Components/AuthContext";
import LoadingPage from './LoadingPage';

const CreateGamePage = () => {
  const { loggedIn } = useAuth();
  return (
    loggedIn ? <CreateGameComponent /> : <LoadingPage />
  )
}

export default CreateGamePage