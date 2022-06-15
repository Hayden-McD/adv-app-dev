import React from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'
import { useAuth } from "../Components/AuthContext";
import LoadingPage from './LoadingPage';
import { routes } from './routePaths';
import { useHistory } from 'react-router-dom';

const CreateGamePage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  if(!loggedIn) {
    history.replace(routes.LOGIN)
  }
  return (
    loggedIn ? <CreateGameComponent /> : <LoadingPage />
  )
}

export default CreateGamePage