import React from "react";
import { routes } from "../Routes/routePaths";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";

const NavbarComponent = ({user, isLoggedIn, authError, setUser, setIsLoggedIn, auth}) => {
  
  return (
    <Navbar bg="dark" variant="dark" data-testid="navbarComponent">
      <Container>
        <Navbar.Brand href={routes.HOME} data-testid="navbarComponent-title">PokerProject</Navbar.Brand>
        {isLoggedIn ? (
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href={routes.HOME} data-testid="navbarComponent-games">Games</Nav.Link>
              <Nav.Link href={routes.CREATEGAME} data-testid="navbarComponent-createGames">Create Game</Nav.Link>
              <Nav.Link href={routes.HOWTOPLAY} data-testid="navbarComponent-how">How to play?</Nav.Link>
            </Nav>
            <Nav data-testid="navbarComponent-logout">
            <LogoutButton setUser={setUser} setIsLoggedIn={setIsLoggedIn} auth={auth} />
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href={routes.LOGIN}  data-testid="navbarComponent-login">login</Nav.Link>
              <Nav.Link href={routes.SIGNUP}  data-testid="navbarComponent-signup">signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            )}
        </Container>
    </Navbar>
  )
}

export default NavbarComponent;
