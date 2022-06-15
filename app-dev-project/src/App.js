import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";

// Pages
import Homepage from "./Routes/Homepage";
import SignupPage from "./Routes/SignupPage";
import LoginPage from "./Routes/LoginPage";
import HowToPlayPage from "./Routes/HowToPlayPage";
import ProfilePage from "./Routes/ProfilePage";
import Error404Page from "./Routes/Error404Page";
import CreateGamePage from "./Routes/CreateGamePage";
import LoadingPage from "./Routes/LoadingPage";

// Components
import Navbar from "./Components/NavbarComponent";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          {/* Route for sign up page */}
          <Route exact path="/signup">
            <SignupPage />
          </Route>

          {/* Route for home page */}
          <Route exact path="/login">
            <LoginPage />
          </Route>

          {/* Route for the how to play page */}
          <Route exact path="/">
            <Homepage />
          </Route>

          {/* Route for log in page */}
          <Route exact path="/how">
            <HowToPlayPage />
          </Route>

          {/* Route for the user profile page */}
          <Route exact path="/profile">
            <ProfilePage />
          </Route>

          {/* Route for creating a game */}
          <Route exact path="/create-game">
            <CreateGamePage />
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
