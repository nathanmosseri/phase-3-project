import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';
const NavBar = () => {

    return (
      
    //     <Stack direction="horizontal" gap={5}>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/" exact>Navbar</Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            <Nav.Link as={NavLink} to="/" exact>General Posts</Nav.Link>
            <Nav.Link as={NavLink} to="/phase-posts">Phase Posts</Nav.Link>
            <Nav.Link as={NavLink} to="/search-users">Search Users</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/my-profile" className="">My Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
        
    )

}

export default NavBar
