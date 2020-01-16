import React from 'react'
import Container from "@material-ui/core/Container"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height:"800px",
      width:"800px",
      border: "20px red solid"
    },
    textFieldSize: {
        width: "400px"
    }
    
  }));



export default function ContactUs() {
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <TextField
                    className={classes.textFieldSize}
                    label="Full Name"
                    variant="outlined" />
            </div>
        )
    
}
