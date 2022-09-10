import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand to='/home'>Gadget ZOne</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="me-auto">
                        <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/home'>Home</Link>
                        <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/about'>About</Link>
                        
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            user
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;