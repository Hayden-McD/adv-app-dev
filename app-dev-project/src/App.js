import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import { routes } from "./Routes/routePaths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

// Pages
import Homepage from "./Routes/Homepage";
import SignupPage from "./Routes/SignupPage";
import LoginPage from "./Routes/LoginPage";
import HowToPlayPage from "./Routes/HowToPlayPage";
import ProfilePage from "./Routes/ProfilePage";
import Error404Page from "./Routes/Error404Page";

// Components
import Navbar from "./Components/NavbarComponent";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("There is a user")
        setUser({
          uid: user.uid,
          email: user.email,
          name: "",
          loginProvider: user.providerId,
        });
      } else {
        console.log("There isnt a user")
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);


  useCallback(() => {
    
  })

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          {/* Route for sign up page */}
          <Route exact path={routes.SIGNUP}>
            <SignupPage user={user} />
          </Route>

          {/* Route for home page */}
          <Route exact path={routes.LOGIN}>
            <LoginPage user={user} />
          </Route>

          {/* Route for the how to play page */}
          <Route exact path={routes.HOME}>
            <Homepage user={user} />
          </Route>

          {/* Route for log in page */}
          <Route exact path={routes.HOWTOPLAY}>
            <HowToPlayPage user={user} />
          </Route>

          {/* Route for the user profile page */}
          <Route exact path={routes.PROFILE}>
            <ProfilePage user={user} />
          </Route>

          {/* Route for the 404 error page */}
          <Route>
            <Error404Page />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
