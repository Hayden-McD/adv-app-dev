import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/App.css";
import { routes } from "./Routes/routePaths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './Components/AuthContext'

//Components and pages
import Homepage from "./Routes/Homepage";
import SignupPage from "./Routes/SignupPage";
import Navbar from "./Components/NavbarComponent";
import LoginPage from "./Routes/LoginPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path={routes.SIGNUP}>
            <SignupPage />
          </Route>
          <Route exact path={routes.HOME}>
            <Homepage />
          </Route>
          <Route exact path={routes.LOGIN}>
            <LoginPage />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
