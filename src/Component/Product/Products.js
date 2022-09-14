import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
   


    useEffect(() => {
        const url = 'http://localhost:5000/products';
        fetch(url)
            .then(res=>res.json())
            .then(data=>setProducts(data))
        
    }, [])

    return (
        <div className='row'>
           {
            products.map(product=>(<div className='col-4' key={product._id}> 
                Name: {product.productName}<br></br>
                Name: {product.productPrice}
            </div>))
           }
           
        </div>
    );
};

export default Products;