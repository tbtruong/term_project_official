import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider, Link } from '@mui/material';

export interface projectCardProps {
    name: string,
    points: string[],
    link: string
}

const titleStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
    textDecoration: 'none!important' as any
}

const actionStyle = {
    textDecoration: 'none!important' as any
}

const ProjectCard = ({name, points}: projectCardProps) => {
  return (
    <Card raised sx={{ maxWidth: 345, textDecoration: 'none' }}>
      <CardActionArea sx={actionStyle}>
      <Link href="https://github.com/tbtruong/term_project_official" underline="hover" target="_blank" color="inherit">
        <CardContent sx={actionStyle}>
          <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
            {name}
            <Divider/>
          </Typography>
           {points.map((item) => <Typography sx={actionStyle} key={name + Math.random()}> {item} <br/> <br/> </Typography>)}
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard