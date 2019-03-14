import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class MainMenu extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Nav className="mr-auto">
                <LinkContainer exact to= "/">
                <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/posts">
                <Nav.Link href="/posts">Posts</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar>
        );
    }
}

export default MainMenu;