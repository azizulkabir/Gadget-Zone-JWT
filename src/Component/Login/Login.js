
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    
    
    let navigate = useNavigate();
    let location = useLocation();
   
    let from = location.state?.from?.pathname || "/";
    

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div >
                <h3 className='text-center'>Please Login First</h3>
                <div className='w-50 mx-auto text-left'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className='text-center'>
                <button className='btn btn-success' onClick={handleGoogleSignIn}> Google SignIn </button>
            </div>
        </div>
    );
};

export default Login;