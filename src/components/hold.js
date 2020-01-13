import TableTopLightboard from "./TableTopLightboard"
import Home from "./Home"
import StandAloneLightboard from "./StandAloneLightboard"
import ContactUs from "./ContactUs"
import FAQ from "./FAQ"
import HowToGuide from "./HowToGuide"








const [studio, setStudio] = React.useState(null);
  const [lightbord, setLightboard] = React.useState(null);
  const [Accessories, setAccessories] = React.useState(null);
  const [resources, setResources] = React.useState(null);
  const [page, setPage] = React.useState("home");

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
  const handleResourcesClick = event => {
    setResources(event.currentTarget);
  };
  const handlResourcesClose = () => {
    setResources(null);
    
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
  const changeHowToGuidePage = () =>{
    setPage("howtoguide")
    handlResourcesClose()
  }
  const changeFAQPage = () =>{
    setPage("faq")
    handlResourcesClose()
  }









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






{page === "home" ? <Home/> : null}
          {page === "tabletoplightboard" ? <TableTopLightboard/>: null}
          {page === "standalonelightboard" ? <StandAloneLightboard/>: null}
          {page === "contactus" ? <ContactUs/>: null}
          {page === "howtoguide" ? <HowToGuide/> : null}
          {page === "faq" ? <FAQ/> : null}
          <Divider variant="middle" />
          <Box pt={4}>
            <Copyright />
          </Box>