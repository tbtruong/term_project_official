import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { skillCardsInterface } from '../Skills';

//skill cart component is a component that takes in a list of items, displays these items in vertical format with a trash icon next to it.  At the end of the list there should be a calculate button 

export interface cartComponentProps {
  skillList: skillCardsInterface[],
  searchItemCallback: (item: skillCardsInterface) => void
}
  
const Demo = styled('div')(({ theme }) => ({
backgroundColor: theme.palette.background.paper,
}));

const cartComponentStyling = {
  maxWidth: 752, 
  width: 300,
  position: "sticky", 
  top: 0, 
  height: "fit-content",
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
}

const textBoxStyle = {
  marginTop: '1rem'
}

const CartComponent = ({skillList, searchItemCallback}: cartComponentProps) => {

  const [open, setOpen] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState('')
  const [isDisabled, setIsDisabled] = React.useState(true)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCurrentImage = (name: string) => {
    let images = require.context('../Static/', false, /\.png$/)
    return images("./" + name + ".png")
  }


  React.useEffect(() => {
      if (emailValue.includes('@') && emailValue.includes('.')) {
        setIsDisabled(false)
      }
      else {
        setIsDisabled(true)
      }
  }, [emailValue])

    return ( 
    <Box sx={cartComponentStyling}>
        <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
         Skills Needed
        </Typography>
        <Demo>
          <List>
            {skillList.map((item) => 
              <ListItem
                key={item.name}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => searchItemCallback(item)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={item.name} src={getCurrentImage(item.name)} style={{objectFit: 'scale-down'}}> 
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                />
              </ListItem>
            )}
          </List>
          {skillList.length > 0 && <Button variant="outlined" onClick={handleClickOpen}>Contact</Button>}
        </Demo>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Tung</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input your email as well if you had anything to say! 
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Email Address"
            type="email"
            variant="outlined"
            onChange={(event) =>  setEmailValue(event.target.value)}
            value={emailValue}
            error={emailValue.length > 4 && isDisabled}
            sx={textBoxStyle}
            required
          />
          <TextField
            autoFocus
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant="filled"
            color="secondary"
            sx={textBoxStyle}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} disabled={isDisabled}>Contact</Button>
        </DialogActions>
      </Dialog>
    </Box>) 
}

export default CartComponent
