import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TableTopLightboard from "./TableTopLightboard"
import Home from "./Home"
import StandAloneLightboard from "./StandAloneLightboard"
import ContactUs from "./ContactUs"




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
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: "red"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));



export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [studio, setStudio] = React.useState(null);
  const [lightbord, setLightboard] = React.useState(null);
  const [Accessories, setAccessories] = React.useState(null);
  const [page, setPage] = React.useState("home");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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
  const changrTableTopLightBoradpage = () =>{
    setPage("tabletoplightboard")
    handlStudioeClose()
  }
 const changeStandAloneLightboardPage = () =>{
   setPage("standalonelightboard")
   handlStudioeClose()
 }
  const handleContactPage =() => {
    setPage("contactus")
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            LEARNING GLASS
          </Typography>
          <Button >About Us</Button>
          <Button>Resources</Button>
          <Button onClick={handleContactPage}>Contact Us</Button>
         
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleStudioClick}>
        Studio Packages
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={studio}
        keepMounted
        open={Boolean(studio)}
        onClose={handlStudioeClose}
      >
        <MenuItem onClick={changrTableTopLightBoradpage}>S33 Table Top Lightboard Studio Package</MenuItem>
        <MenuItem onClick={changeStandAloneLightboardPage}>S66 Standalone Lightboard Studio Package</MenuItem>
      </Menu>
      <Divider />
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleLightboradClick}>
        Lightboard Glass Model
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={lightbord}
        keepMounted
        open={Boolean(lightbord)}
        onClose={handlLightboardClose}
      >
        <MenuItem onClick={handlLightboardClose}>S33A Table Top Lightboard System</MenuItem>
        <MenuItem onClick={handlLightboardClose}>S66A Lightboard System</MenuItem>
        <MenuItem onClick={handlLightboardClose}>S66 Standalone Lightboard System</MenuItem>
      </Menu>
      <Divider/>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleAccessoricsClick}>
      Accessories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={Accessories}
        keepMounted
        open={Boolean(Accessories)}
        onClose={handlAccessoricsClose}
      >
        <MenuItem onClick={handlAccessoricsClose}>Dracast LED500 Bicolor LED Light</MenuItem>
        <MenuItem onClick={handlAccessoricsClose}>Neon Dry Erase Markers</MenuItem>
        <MenuItem onClick={handlAccessoricsClose}>Decimator In-line video flipping device for live-streaming</MenuItem>
        <MenuItem onClick={handlAccessoricsClose}>Neon Dry Erase Markers</MenuItem>
      </Menu>
      <Divider/>
      </Drawer>

    
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {page === "home" ? <Home/> : null}
          {page=== "tabletoplightboard" ? <TableTopLightboard/>: null}
          {page=== "standalonelightboard" ? <StandAloneLightboard/>: null}
          {page === "contactus" ? <ContactUs/>: null}
          <Divider variant="middle" />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}