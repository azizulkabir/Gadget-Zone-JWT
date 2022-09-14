import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Products = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const url = 'http://localhost:5000/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className='row'>
            {
                products.map(product => (<div className='col-3 ' key={product._id}>
                    <Card className='my-3' style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>{product.productPrice}</Card.Text>
                            <Button variant="success">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>))
            }

        </div>
    );
};

export default Products;