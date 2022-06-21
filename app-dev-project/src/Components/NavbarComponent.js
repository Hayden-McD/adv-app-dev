import React from "react";
import { routes } from "../Routes/routePaths";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";

const NavbarComponent = ({user, isLoggedIn, authError, setUser, setIsLoggedIn, auth}) => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={routes.HOME}>PokerProject</Navbar.Brand>
        {isLoggedIn ? (
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href={routes.HOME}>Games</Nav.Link>
              <Nav.Link href={routes.CREATEGAME}>Create Game</Nav.Link>
              <Nav.Link href={routes.HOWTOPLAY}>How to play?</Nav.Link>
            </Nav>
            <Nav>
              <LogoutButton setUser={setUser} setIsLoggedIn={setIsLoggedIn} auth={auth} />
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
