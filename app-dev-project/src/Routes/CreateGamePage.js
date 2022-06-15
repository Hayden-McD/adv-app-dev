import React from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'
import { useAuth } from "../Components/AuthContext";
import LoadingPage from './LoadingPage';
import { loggedin_allowed, routes } from './routePaths';
import { useHistory } from 'react-router-dom';

const CreateGamePage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  console.log(loggedIn)

  return (
    loggedIn && loggedin_allowed.includes(history.location.pathname) ? <CreateGameComponent /> : history.replace(routes.LOGIN)
  )
}

export default CreateGamePage