import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
// Pages
import Homepage from "./Routes/Homepage";
import SignupPage from "./Routes/SignupPage";
import LoginPage from "./Routes/LoginPage";
import HowToPlayPage from "./Routes/HowToPlayPage";
import CreateGamePage from "./Routes/CreateGamePage";

// Components
import Navbar from "./Components/NavbarComponent";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(null);

  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user.currentUser);
        setAuthError(null);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });
  } catch (error) {
    setUser(null);
    setIsLoggedIn(false);
    setAuthError(error.message);
  }

  return (
      <Router>
           <Navbar
              authError={authError}
              isLoggedIn={isLoggedIn}
              auth={auth}
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
          />
          <Switch>
              {/* Route for sign up page */}
              <Route exact path='/signup'>
              {isLoggedIn === true ? <Redirect to="/" /> : null}
                  <SignupPage
                      authError={authError}
                      isLoggedIn={isLoggedIn}
                      setUser={setUser}
                      setIsLoggedIn={setIsLoggedIn}
                      setAuthError={setAuthError}
                      auth={auth}
                  />
              </Route>

              {/* Route for home page */}
              <Route exact path='/login'>
              {isLoggedIn === true ? <Redirect to="/" /> : null}
                  <LoginPage
                      authError={authError}
                      isLoggedIn={isLoggedIn}
                      setUser={setUser}
                      setIsLoggedIn={setIsLoggedIn}
                      setAuthError={setAuthError}
                      auth={auth}
                  />
              </Route>

              {/* Route for the how to play page */}
              <Route exact path='/'>
                  <Homepage
                      authError={authError}
                      isLoggedIn={isLoggedIn}
                      user={user}
                      auth={auth}
                  />
              </Route>

              {/* Route for log in page */}
              <Route exact path='/how'>
                  <HowToPlayPage
                      authError={authError}
                      isLoggedIn={isLoggedIn}
                      user={user}
                      auth={auth}
                  />
              </Route>

              {/* Route for creating a game */}
              <Route exact path='/create-game'>
                  <CreateGamePage
                      authError={authError}
                      isLoggedIn={isLoggedIn}
                      user={user}
                      auth={auth}
                  />
              </Route>
          </Switch>
      </Router>
  );
};

export default App;