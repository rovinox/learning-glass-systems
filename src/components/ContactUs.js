import React from 'react'
import Container from "@material-ui/core/Container"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection:"column",
      alignItems:"center",
      marginTop:"100px"
      
    },
    textFieldSize: {
        width: "400px",
        marginTop:"20px"
    },
    botton:{
        marginTop:"30px"
    }
    
  }));



export default function ContactUs() {
   
    const classes = useStyles();
    const [input, setInput] = React.useState("")    

    const handleInput = event => {
        const { name, value } = event.target;
        setInput({[name]: value });
    };

    const submitInfo = (e) => {
        e.preventDefault()
        console.log(input);
    }   

        return (
            
            <div>
                <form className={classes.root} onSubmit={submitInfo} >
                    <TextField
                    onChange={handleInput}
                    className={classes.textFieldSize}
                    name="name"
                    label="Full Name"
                    variant="outlined" />
                    
                    <TextField
                    onChange={handleInput}
                    className={classes.textFieldSize}
                    name="email"
                    label="Your Email"
                    variant="outlined" 
                    type="email"
                    />

                    <TextField
                    onChange={handleInput}
                    className={classes.textFieldSize}
                    name="message"
                    label="Message"
                    multiline
                    rows="6"
                    variant="outlined" />
                    <Button className={classes.textFieldSize} type="submit" variant="contained" color="primary">send</Button>
                </form>
            </div>
        )
    
}
