import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/App.css";
import { routes } from "./Routes/routePaths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components and pages
import Homepage from "./Routes/Homepage";
import SignupPage from "./Routes/SignupPage";
import Navbar from "./Components/NavbarComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={routes.SIGNUP}>
          <SignupPage />
        </Route>
        <Route path={routes.HOME}>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
