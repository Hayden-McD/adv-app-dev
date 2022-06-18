import React, { useState } from "react";
import { routes } from "../Routes/routePaths";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={routes.HOME}>PokerProject</Navbar.Brand>
        {user ? (
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href={routes.HOME}>Games</Nav.Link>
              <Nav.Link href={routes.CREATEGAME}>Create Game</Nav.Link>
              <Nav.Link href={routes.HOWTOPLAY}>How to play?</Nav.Link>
            </Nav>
            <Nav>
              <LogoutButton />
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href={routes.LOGIN}>login</Nav.Link>
              <Nav.Link href={routes.SIGNUP}>signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            )}
        </Container>
    </Navbar>
  )
}

export default NavbarComponent;
