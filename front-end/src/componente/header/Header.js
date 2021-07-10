import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { GiSlicedBread, GiDoughRoller } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import "./header.css"
const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >
                        <GiDoughRoller
                            size="32"
                            style={{ color: "#FF7518" }} />
                        Baker's Calculator
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto ">
                        <LinkContainer
                            to="/" className="underline" >
                            <Nav.Link  >
                                <AiFillHome />
                                Baker's Calculator
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer
                            to="/recipes" className="underline">
                            <Nav.Link >
                                <GiSlicedBread />
                                Dough Recipes
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header


