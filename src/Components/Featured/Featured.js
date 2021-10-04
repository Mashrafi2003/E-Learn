import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import About from '../About/About';
import Product from '../Product/Product';
import './Featured.css'

const Featured = () => {
    const [course , setCourse] = useState([]);
    useEffect(()=>{
        fetch('./course.json')
        .then(res=>res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className=''>
            {/* Showing Course Featuring on UI */}
            <div className='featured-container'>
            <div>
            <h1 className='featured-title'>Want To Be A Skilled Person?</h1>
            <div className='button-group'>
            <Button variant="contained">Join Now</Button>
            <Button variant="outlined">Free Trial</Button>
            </div>
            </div>
            </div>
            {/* Showing Products on UI */}
            <div className='products-ui'>
                {
                    course.map(product=><Product
                    key ={product.key}
                    product = {product}
                    >

                    </Product>)
                }
            </div>
           

        </div>
    );
};

export default Featured;