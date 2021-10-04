import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './Product.css'

//Took The Props from Feature.js to Show on The UI 

const Product = (props) => {
    
    // Distructuring The data got from API and using them as a single parameter
    const {name , price , img } = props.product;
    return (
      // Used Card component from Material UI to show the products on Feature page
        <div className='product-container'>
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography className='product-name' gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography className='price-name' gutterBottom variant="h6" component="div">
          Price : ${price}
        </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Start Trial</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Product;