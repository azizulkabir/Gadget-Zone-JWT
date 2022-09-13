import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';




const Header = () => { 
    const [user] = useAuthState(auth);
    const handleSignOut=(event)=>{
        event.preventDefault();
        signOut(auth);
        console.log(user.photoURL);
    }
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>Gadget ZOne</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="me-auto">
                        <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/home'>Home</Link>
                        <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/about'>About</Link>
                        <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/products'>Products</Link>
                        <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/uploadproduct'>UploadProduct</Link>
                        
                        
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                           {
                            user ? 
                            <div>
                                <span>{user.displayName}</span> <span ><img className='rounded-circle' src={user.photoURL}  alt="" />
                                </span> <span onClick={handleSignOut} className='btn btn-success'>LogOut</span>
                            </div>
                              :
                            <div>
                                <Link style={{textDecoration: 'none'}} className='mx-1 text-success ' to='/login'>Login</Link>
                            </div>
                            
                           }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;