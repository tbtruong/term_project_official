import { AutoStories } from '@mui/icons-material/';
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const AppBar = () => {
  const containerStyles = {
    margin: 0,
    maxWidth: '100%'
  }

  const shoppingCartStyle = {
    display: { xs: 'none', md: 'flex' }, 
    mr: 1,
  }

  const typographyStyle = {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    justifyContent: 'flex-start'
  }

  const boxStyle = {
     flexGrow: 1, 
     display: { xs: 'none', md: 'flex'},
     justifyContent: 'flex-end'
  }

  const pageButtonStyle = { 
    my: 2, color: 'white', 
    display: 'block' 
  } 

  return (
    <AppBarMui position="static">
      <Container sx={containerStyles} maxWidth={false}>
        <Toolbar disableGutters>
          <AutoStories sx={shoppingCartStyle} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={typographyStyle}
          >
            BIOGRAPHY
          </Typography>
          <Box sx={boxStyle}>
            <Link to={`/Skills`} style={{textDecoration: 'none'}}>
            <Button
              key={'Skills'}
              sx={pageButtonStyle}
            >
              Skills
            </Button>
            </Link>
            <Link to={`/Resume.pdf`} style={{textDecoration: 'none'}} target="_blank" download>
            <Button
              key={'Download'}
              sx={pageButtonStyle}
            >
              Resume
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBarMui>
  );
};
export default AppBar;
