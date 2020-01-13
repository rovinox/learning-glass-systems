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
import Button from '@material-ui/core/Button';
import VerticalList from "./VerticalList"
import TableTopLightboard from "./TableTopLightboard"
import Home from "./Home"
import StandAloneLightboard from "./StandAloneLightboard"
import ContactUs from "./ContactUs"
import FAQ from "./FAQ"
import HowToGuide from "./HowToGuide"

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
  NavItems: {
    display:"flex",
    justifyContent:"flex-end"

  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState("home");

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


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <VerticalList
      changrTableTopLightBoradpage={changrTableTopLightBoradpage}
      changeStandAloneLightboardPage={changeStandAloneLightboardPage}
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
          <Typography className={classes.NavItems}>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
       
          </Typography>
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
          {page === "contactus" ? <ContactUs />: null}
          {page === "howtoguide" ? <HowToGuide /> : null}
          {page === "faq" ? <FAQ /> : null}
          
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