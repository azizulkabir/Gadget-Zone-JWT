import React from 'react';
import { Button, Form } from 'react-bootstrap';

const UploadProducts = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const productName = event.target.name.value;
        const productPrice = event.target.price.value;
        console.log(productName, productPrice);
    }
    return (
        <div>
            <h3 className='text-center'>Upload Products:</h3>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name: </Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter product name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Price: </Form.Label>
                        <Form.Control type="text" name='price' placeholder="Enter product price" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UploadProducts;