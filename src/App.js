import React from 'react';
import router from "./router"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import './App.css';



const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: teal
  }
});

function App() {
  return (
     
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {router} 
    </MuiThemeProvider>
   
   
  );
}

export default App;
