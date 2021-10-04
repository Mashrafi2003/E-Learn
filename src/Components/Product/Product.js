import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name , price , img } = props.product;
    return (
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