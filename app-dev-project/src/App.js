import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/App.css";
import { routes } from "./Routes/routePaths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './Components/AuthContext'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

//Components and pages
import Homepage from "./Routes/Homepage";
import SignupPage from "./Routes/SignupPage";
import Navbar from "./Components/NavbarComponent";
import LoginPage from "./Routes/LoginPage";

const App = () =>  {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          name: '',
          loginProvider: user.providerId
        })
      }
      else {
        setUser(null);
      }
    })
    return (() => unsubscribe())
  }, [auth])

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path={routes.SIGNUP}>
          <SignupPage user={user}/>
          </Route>
          <Route exact path={routes.HOME}>
          <Homepage user={user}/>
          </Route>
          <Route exact path={routes.LOGIN}>
          <LoginPage user={user}/>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
