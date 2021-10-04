import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {
  // Loading Data From Fake API
    const [course , setCourse] = useState([]);

  // Showing Data From the API in the UI
    useEffect(()=>{
        fetch('./course.json')
        .then(res=>res.json())
        .then(data => setCourse(data))
    },[])
    
    return (
        <div className='about-ui'>
          {/* Took Single Product from every Product in this section */}
           {
              course.map((product) =>
              <div className='single-course'>
                  <Card sx={{ maxWidth: 345 }}>
                    {/* Showed The Data On UI using Card Component from Material UI */}
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