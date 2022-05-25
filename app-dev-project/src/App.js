import React from "react";
import "./CSS/App.css";
import { routes } from "./Routes/routePaths";
import Homepage from "./Routes/Homepage";
import Navbar from "./Components/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={routes.HOME}>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
