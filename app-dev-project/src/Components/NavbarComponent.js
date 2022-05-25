import React from 'react'
import { routes } from "../Routes/routePaths";
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href={routes.HOME}>PokerProject</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href={routes.HOME}>Games</Nav.Link>
      <Nav.Link href={routes.HOME}>How to play?</Nav.Link>
      <Nav.Link href={routes.HOME}>Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default NavbarComponent