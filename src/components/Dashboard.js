import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import VerticalList from "./VerticalList"
import TableTopLightboard from "./StudioPackages/TableTopLightboard"
import Home from "./Home"
import StandAloneLightboard from "./StudioPackages/StandAloneLightboard"
import ContactUs from "./ContactUs"
import FAQ from "./Resource/FAQ"
import HowToGuide from "./Resource/HowToGuide"
import AboutUs from "./AboutUs"
import LightboardSystem from "../components/LightboardGlassModel/LightboardSystem"
import StandaloneLightboardSystem from "../components/LightboardGlassModel/StandaloneLightboardSystem"
import TableTopLightboardSystem from "../components/LightboardGlassModel/TopLightboardSystem"
import BlackMagic from "../components/Accessories/BlackMagic"
import DracastLEDLight from "../components/Accessories/DracastLEDLight"
import EraseMarkers from "../components/Accessories/EraseMarkers"
import Decimator from "../components/Accessories/Decimator"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Resources: {
    marginRight:"70px",
    marginLeft:"70px"
  },
  resourcesBackground:{
    backgroundColor:"teal"
  }

  
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState("home");
  const [resources, setResources] = React.useState(null);

  const handleResourcesClick = event => {
    setResources(event.currentTarget);
  };
  const handlResourcesClose = () => {
    setResources(null);
    
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changrTableTopLightBoradpage = () =>{
    setPage("tabletoplightboard")
    
  }

 const changeStandAloneLightboardPage = () =>{
   setPage("standalonelightboard")
   
 }

  const handleContactPage =() => {
    setPage("contactus")
  }

  const changeHowToGuidePage = () =>{
    setPage("howtoguide")
    }

  const changeFAQPage = () =>{
    setPage("faq")
   }

   const changeAboutUsPage = () =>{
     setPage("aboutus")
   }

   const changeTableTopLightboardSystemPage = () => {
      setPage("TableTopLightboardSystem")
   }
   
   const changeLightboardSystemPage = () => {
      setPage("LightboardSystem")
   }

   const changeStandaloneLightboardSystemPage = () => {
      setPage("StandaloneLightboardSystem")
   }

   const changeBlackMagicPage = () => {
     setPage("changeBlackMagicPage")
   }

   const changeDracastLEDLightPage = () => {
     setPage("changeDracastLEDLightPage")
   }

   const changeEraseMarkersPage = () => {
    setPage("changeEraseMarkersPage")
   }

   const changeDecimatorPage = () => {
    setPage("changeDecimatorPage")
   }


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <VerticalList
      changrTableTopLightBoradpage={changrTableTopLightBoradpage}
      changeStandAloneLightboardPage={changeStandAloneLightboardPage}
      changeTableTopLightboardSystemPage={changeTableTopLightboardSystemPage} 
      changeLightboardSystemPage={changeLightboardSystemPage}
      changeStandaloneLightboardSystemPage={changeStandaloneLightboardSystemPage}
      changeBlackMagicPage={changeBlackMagicPage}
      changeDracastLEDLightPage={changeDracastLEDLightPage}
      changeEraseMarkersPage={changeEraseMarkersPage}
      changeDecimatorPage={changeDecimatorPage}
      />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          

          <Button onClick={changeAboutUsPage} color="inherit">About Us</Button>
          

          <Button className={classes.Resources} color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleResourcesClick}>
           Resources
         </Button>
          <Menu
          id="simple-menu"
          anchorEl={resources}
          keepMounted
          open={Boolean(resources)}
          onClose={handlResourcesClose}>
          <MenuItem onClick={() =>{handlResourcesClose(changeHowToGuidePage())}}>How to guide</MenuItem>
          <MenuItem onClick={() =>{handlResourcesClose(changeFAQPage())}}>FAQ</MenuItem>
          </Menu>

          <Button onClick={handleContactPage} color="inherit">Contact Us</Button>
       
          
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {page === "home" ? <Home/> : null}
          {page === "tabletoplightboard" ? <TableTopLightboard /> : null}
          {page === "standalonelightboard" ? <StandAloneLightboard  />: null}
        {page === "contactus" ? <ContactUs handleContactPage={handleContactPage} />: null}
          {page === "howtoguide" ? <HowToGuide /> : null}
          {page === "faq" ? <FAQ /> : null}
          {page === "aboutus" ? <AboutUs /> : null}
          {page === "TableTopLightboardSystem" ? <TableTopLightboardSystem/> : null}
          {page === "LightboardSystem" ? <LightboardSystem/> : null}
          {page === "StandaloneLightboardSystem" ? <StandaloneLightboardSystem/> : null}
          {page === "changeBlackMagicPage" ? <BlackMagic /> : null}
          {page === "changeDracastLEDLightPage" ? <DracastLEDLight /> : null}
          {page === "changeEraseMarkersPage" ? <EraseMarkers /> : null}
          {page === "changeDecimatorPage" ? <Decimator /> : null}
            
          <Divider variant="middle" color="primary" />
          <Box pt={4}>
            <Copyright />
          </Box>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;