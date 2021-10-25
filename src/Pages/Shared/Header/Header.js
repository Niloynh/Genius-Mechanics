import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Genius <span className="text-info">Mechanics</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-info">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-info">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/addService" className="text-info">AddServices</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className="text-info">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light" className="text-info">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="text-info">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;