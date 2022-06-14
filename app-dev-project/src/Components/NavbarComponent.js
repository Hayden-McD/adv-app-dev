import React from "react";
import { routes } from "../Routes/routePaths";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { superSetLoggedIn } = useAuth()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={routes.HOME}>PokerProject</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            {superSetLoggedIn && <Nav.Link href={routes.HOME}>Games</Nav.Link>}
            {superSetLoggedIn && <Nav.Link href={routes.HOWTOPLAY}>How to play?</Nav.Link>}
            {superSetLoggedIn && <Nav.Link href={routes.PROFILE}>Profile</Nav.Link>}
            {
              !superSetLoggedIn && <>
                <Nav.Link href={routes.LOGIN}>login</Nav.Link>
                <Nav.Link href={routes.SIGNUP}>signup</Nav.Link>
              </>
            }
          </Nav>
          {superSetLoggedIn &&
            <Nav>
              <LogoutButton />
            </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
