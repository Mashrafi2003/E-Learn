import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './Services.css';
import design from '../../images/design.png';
import development from '../../images/development.jpg';
import it from '../../images/it-software.jpg';
import business from '../../images/business.jpg';
import marketing from '../../images/marketing.jpg';
import photography from '../../images/photography.jpg';
import health from '../../images/health.jpg';
import technology from '../../images/technology.jpg';

const Services = () => {
    return (
        <div>
            <h1 className='feature-header'>Features and Services</h1>
            <br />
            <h4 className='feature-title'>There are so many reasons to choose E-Learn, here are a few Feature</h4>
            
            {/*------------
             All Datas of Services will be displayed here 
             -------------*/}

            <div className='cards'>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={design}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={development}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In the economic study of the public sector, economic and social development is the process by which the economic well-being and quality of life of a nation, region, local community, or an individual are improved according to targeted goals and objectives
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={it}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IT & Software
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Simply put, the core difference between software and IT companies is that software companies create, change or maintain useful products. IT companies ensure that all systems, devices and software work together to help people get things done.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={business}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Business
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The business description is meant to provide an overview of the business, including what the business does and how the company is unique from others in the same industry. This description provides extensive details outlining the business
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={marketing}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Marketing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Marketing refers to the process an organization undertakes to engage its target audience, build strong relationships to create value in order to capture value in return. It is one of the primary components of business management and commerce
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={photography}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PhotoGraphy
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={health}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Health & Care
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
                <div className='card'>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={technology}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Technology
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Technology is the sum of any techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;