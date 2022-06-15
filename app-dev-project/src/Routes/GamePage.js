import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

const GamePage = () => {
  const history = useHistory();
  const { loggedIn } = useAuth();
  const history = useHistory();

  if(!loggedIn) {
    history.replace(routes.LOGIN)
  }
    return (
    <h2>GamePage</h2>
    )
}

export default GamePage