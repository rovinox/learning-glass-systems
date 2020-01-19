import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import OBS from "../pdf/How to Guides 2. OBS-Tutorial.pdf"
import Powerpoint from "../pdf/How to Guides 1. PowerPoint-Setup-Tutorial.pdf"



const useStyles = makeStyles ({
    root: {
        display:"flex", 
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"80vh"
    }
      
  })

export default function HowToGuide () {

   
    const classes = useStyles();
    
        return (
            <div  className={classes.root}> 
                 <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button><a href={OBS} >obs steup</a></Button>
                    <Button><a href={Powerpoint}>powerpoint Setup</a></Button>
                </ButtonGroup>
            </div>
        )
}

