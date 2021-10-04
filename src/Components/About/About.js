import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {
    const [course , setCourse] = useState([]);

    useEffect(()=>{
        fetch('./course.json')
        .then(res=>res.json())
        .then(data => setCourse(data))
    },[])
    
    return (
        <div className='about-ui'>
           {
              course.map((product) =>
              <div className='single-course'>
                  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography className='product-name' gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Price : ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="outlined">Buy Now</Button>
      </CardActions>
    </Card>
              </div>
            )
              
           }
        </div>
    );
};

export default About;