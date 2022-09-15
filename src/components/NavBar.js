import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';
const NavBar = ({oneUserData}) => {

    return (
      
    //     <Stack direction="horizontal" gap={5}>
    <div className="sticky">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/" exact ><h1 >// FLAT-LINK</h1></Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            <Nav.Link as={NavLink} to="/general-posts"><h5>General Posts</h5></Nav.Link>
            <Nav.Link as={NavLink} to="/" exact><h5>Phase Posts</h5></Nav.Link>
            <Nav.Link as={NavLink} to="/search-users"><h5>Search Users</h5></Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/my-profile" className="">{oneUserData.name}'s Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
        
    )

}

export default NavBar
