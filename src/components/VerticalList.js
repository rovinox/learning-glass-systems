import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  domain:{
   textAlign:"center",
   marginBottom:"60px",
   fontSize:"45px",
   color:"teal",
   textShadow:"2px 2px 4px",
   fontFamily:"Impact, Charcoal, sans-serif",
   transform: "rotate(-45deg)",

  }
})

export default function VerticalList (props) {

  const classes = useStyles();

    const [studio, setStudio] = React.useState(null);
    const [lightbord, setLightboard] = React.useState(null);
    const [Accessories, setAccessories] = React.useState(null);

    

    const handleStudioClick = event => {
        setStudio(event.currentTarget);
      };
      const handlStudioeClose = () => {
        setStudio(null);
        
      };
      const handleLightboradClick = event => {
        setLightboard(event.currentTarget);
      };
      const handlLightboardClose = () => {
        setLightboard(null);
      };
      const handleAccessoricsClick = event => {
        setAccessories(event.currentTarget);
      };
      const handlAccessoricsClose = () => {
        setAccessories(null);
      };

    
        return (
            <div>
              <Typography className={classes.domain} >THEDOMAIN</Typography>
            <Divider />
                <List>
                    <ListItem>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleStudioClick}>
                      Studio Packages
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={studio}
                    keepMounted
                    open={Boolean(studio)}
                    onClose={handlStudioeClose}>
                    <MenuItem onClick={ () =>{props.changrTableTopLightBoradpage(handlStudioeClose())}} >S33 Table Top Lightboard Studio Package</MenuItem>
                    <MenuItem onClick={ () =>{props.changeStandAloneLightboardPage(handlStudioeClose())}} >S66 Standalone Lightboard Studio Package</MenuItem>
                    </Menu>
                    <Divider /> 
                     </ListItem>
                     <ListItem>
                     <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleLightboradClick}>
                        Lightboard Glass Model
                     </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={lightbord}
                    keepMounted
                    open={Boolean(lightbord)}
                    onClose={handlLightboardClose}>
                    <MenuItem onClick={() =>{props.changeTableTopLightboardSystemPage(handlLightboardClose())}} >S33A Table Top Lightboard System</MenuItem>
                    <MenuItem onClick={() =>{props.changeLightboardSystemPage(handlLightboardClose())}} >S66A Lightboard System</MenuItem>
                    <MenuItem onClick={() =>{props.changeStandaloneLightboardSystemPage(handlLightboardClose())}} >S66 Standalone Lightboard System</MenuItem>
                    </Menu>
                    <Divider/>
                    </ListItem>
                    <ListItem>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleAccessoricsClick}>
                        Accessories
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={Accessories}
                    keepMounted
                    open={Boolean(Accessories)}
                    onClose={handlAccessoricsClose}>
                    <MenuItem onClick={() =>{props.changeDracastLEDLightPage(handlAccessoricsClose())}} >Dracast LED500 Bicolor LED Light</MenuItem>
                    <MenuItem onClick={() =>{props.changeEraseMarkersPage(handlAccessoricsClose())}} >Neon Dry Erase Markers</MenuItem>
                    <MenuItem onClick={() =>{props.changeDecimatorPage(handlAccessoricsClose())}} >Decimator In-line video flipping device for live-streaming</MenuItem>
                    <MenuItem onClick={() =>{props.changeBlackMagicPage(handlAccessoricsClose())}} >BlackMagic Mini-recorder for streaming or inserting images in real-time</MenuItem>
                    </Menu>
                    </ListItem>
                </List>
            <Divider />
      
            </div>
        )
    
}
