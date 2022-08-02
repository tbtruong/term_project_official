import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { skillCardsInterface } from '../Skills';

//Should take in an object that has a title, image, description, potentially id. 

export interface cardComponentProps {
  product: skillCardsInterface,
  skillListCallback: (item: skillCardsInterface) => void
}

//image from cardmedia still needs to work dynamically
const CardComponent = ({product, skillListCallback}: cardComponentProps) => {

  const cardMediaStyle = {
    objectFit: "contain",
    marginTop: "1rem"
  }
  
  const wordStyle = {
    textAlign: 'center'
  }
  
  const getCurrentImage = (name: string) => {
    let images = require.context('../Static/', false, /\.png$/)
    return images("./" + name + ".png")
  }

  const buttonStyle = {
    justifyContent: 'center'
  }

  return (
    <Card sx={{ width: 345 }} raised>
      <CardMedia
        component="img"
        height="140"
        image={getCurrentImage(product.name)}
        alt={product.name}
        sx={cardMediaStyle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={wordStyle}>
          {product.name} 
        </Typography>
      </CardContent>
      <CardActions sx={buttonStyle}>
        <Button size="small" variant="outlined" onClick={(() => skillListCallback(product) )}>Request Help</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent
