import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';


interface schoolCardProps {
    title: string;
    description: string;
    details: string[]
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const SchoolCard = ({title, description, details}: schoolCardProps) => {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const getCurrentImage = (name: string) => {
        let images = require.context('../Static/', false, /\.png$/)
        return images("./" + name + ".png")
        }

    const cardMediaStyle = {
        objectFit: 'scale-down'
    }

    const cardHeaderStyle = {
        textAlign: 'center'
    }
        return (
            (<Box>
                <Card sx={{ width: 345 }} raised>
                <CardMedia
                component="img"
                height="194"
                image={getCurrentImage('BU')}
                alt={title}
                sx={cardMediaStyle}
                />
                <CardHeader
                    title= {title}
                    subheader={description}
                    sx={cardHeaderStyle}
                />
              <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {details.map((item: string) => {
                        return <Typography key={item} variant='body1'>
                            {item}
                        </Typography>
                    })}
                </CardContent>
              </Collapse>
            </Card>
            </Box>) 
        )}

export default SchoolCard