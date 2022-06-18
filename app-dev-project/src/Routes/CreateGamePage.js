import React from 'react'
import CreateGameComponent from '../Components/CreateGameComponent'
import LoadingPage from './LoadingPage';
import { loggedin_allowed, routes } from './routePaths';
import { useHistory } from 'react-router-dom';

const CreateGamePage = () => {
  const history = useHistory();

  return (
      <CreateGameComponent />
  )
}

export default CreateGamePage