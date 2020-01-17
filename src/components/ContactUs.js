import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

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



export default function ContactUs(props) {
    // const {handleContactPage} = props;
    const classes = useStyles();
    const [fullName, setFullName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("") 
    const [success , setSuccess ] = React.useState(false); 
    const [fail , setFail] = React.useState(false);
    
    const handleSuccess  = () => {
        setSuccess(true);
      };

    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
      }; 
      
      const handleFail  = () => {
        setFail(true);
      };

    const handleFailClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setFail(false);
      };  


    const handleMessage = event => {
        const { name, value } = event.target;
        setMessage({[name]: value });
    };

    const handleName = event => {
        const { name, value } = event.target;
        setFullName({[name]: value });
    }

    const handleEmail = event => {
        const { name, value } = event.target;
        setEmail({[name]: value });
    }

    const submitInfo = (e) => {
        e.preventDefault()
        if(!fullName|| !email || !message) {
          handleFail()
          
        } else {
          handleSuccess()
          setTimeout(()=>{props.backToHome()},3000)
     }
  }   
    
        return (
            
            <div>
                <Snackbar open={success} autoHideDuration={6000} onClose={handleSuccessClose}>
                  <Alert variant="filled" onClose={handleSuccessClose} severity="success">
                   Your Message Has Been Sent
                  </Alert>
                </Snackbar>
                <Snackbar open={fail} autoHideDuration={6000} onClose={handleFailClose}>
                  <Alert variant="filled" onClose={handleFailClose} severity="error">
                   Please fill out all the fields
                  </Alert>
                </Snackbar>
                <form className={classes.root} onSubmit={submitInfo} >
                    <TextField
                    onChange={handleName}
                    className={classes.textFieldSize}
                    name="name"
                    label="Full Name"
                    variant="outlined" />
                    
                    <TextField
                    onChange={handleEmail}
                    className={classes.textFieldSize}
                    name="email"
                    label="Your Email"
                    variant="outlined" 
                    type="email"
                    />

                    <TextField
                    onChange={handleMessage}
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
