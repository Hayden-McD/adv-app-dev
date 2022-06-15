import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { routes, loggedin_allowed } from './routePaths';

const GamePage = () => {
  const history = useHistory();
  const { loggedIn } = useAuth();
  const history = useHistory();

    return (
      loggedIn && loggedin_allowed.includes(history.location.pathname) ? <h2>GamePage</h2> : history.replace(routes.LOGIN)
    )
}

export default GamePage