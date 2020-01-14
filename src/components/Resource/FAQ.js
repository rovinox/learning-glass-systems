import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function FAQ () {
    const classes = useStyles();
        return (
            <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>How do I clean the glass?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                For normal erasing, use the terrycloth towels. You will notice that the pens tend to leave some residue. These should be unnoticeable to the camera and it should never become necessary to interrupt video recording to clean the glass. When in doubt, check the footage.
                    
                After a week or two of continuous use, it is good practice to deep clean the glass with a foaming glass cleaner (must be foaming) and a squeegee. Spray the foam across the entire glass, and let it sit for 30 seconds. Starting from the top corner, use the squeegee to wipe horizontally, then move lower to the next patch. Wipe the squeegee with a towel after each pass. Wipe off any residual cleaner on the glass with a clean towel, as you would clean any window. Repeat this process as necessary.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>What equipment do I need to create a Learning Glass video?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                The basic Learning Glass set up requires the following elements:
                <br></br>
                Learning Glass
                <br></br>
                Microphone
                <br></br>
                Video Camera
                <br></br>
                Additional elements for optimum image: lighting (for lecturer), backdrop, quiet room.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>How does the image get flipped horizontally?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Many astute viewers immediately point out “Hey, the lecturer is writing backwards!” This is, of course, not the case. The lecturer writes normally, then the video is flipped horizontally which puts it in the right orientation. There are different approaches for pre-recorded videos and live videos:
                <br></br>
                Pre-recorded: If you are not presenting live, but rather preparing your videos ahead of time, you can simply record the video normally then flip the image in post-production. Almost any video editing software program has this capability: Premiere, Final Cut, Quicktime Player, etc.
                    <br></br>
                Live videos: If the footage is going to be presented or streamed live, the image can be flipped in four ways:
                <br></br>
                Some higher end cameras have a “scan reverse” feature, which will flip the image as it is being recorded (Canon HFG20, Canon XA10).
                <br></br>
                Video hardware, such as a scaler, can be attached between the camera and a computer to flip the image.
                <br></br>
                If you are using a computer to do the streaming, apps can be used to flip the image (iGlasses).
                <br></br>
                Finally, a mirror can be used to flip the image. Place it in front of the camera.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Can I incorporate PowerPoint slides while using the Learning Glass?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Yes, utilizing a video switcher or video switching software on a computer, you can incorporate PowerPoint slides, video or other images. (Hardware: Blackmagic ATEM series, Roland VR series. Software: OBS, Wirecast, Vmix)

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Can the Learning Glass be used in a live setting?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Yes, the flipped image can be output to flat panel displays placed in the room. Student tables can be outfitted with wireless microphones, allowing audio of student questions to be captured on your recording. In a large lecture hall, the image is projected on a screen overhead or to the side. Most video projectors have a reverse setting eliminating the need to flip before output.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Do I need to assemble the unit?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                No, the Learning Glass unit is pre-built with a plug-in power supply and dimmer. The table for the LGS60T requires some assembly and the LGS unit will need to be mounted on the table, using the hardware provided in the accessory box. IMPORTANT: mounting the glass on the table requires two people to move, steady and bolt the unit to the table. See Assembly Guide for more details.


                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>How is the Learning Glass lightboard shipped?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                The LGS60 is crated and shipped by a white glove freight service. It is necessary to have a delivery address that will accommodate a semi-trailer truck. Redelivery will result in additional charges. Mounting hardware, markers and cleaning kit are shipped in a separate box. The table (LGS60T) is shipped directly from the factory via FedEx Ground in two packages. Shipping costs include crating, insurance, freight and delivery services.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>How long does it take to get my Learning Glass lightboard?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Most units are delivered within 3-4 weeks of order. International orders may take longer in transit, depending on location and time in customs.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}> Do you offer any discounts?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Yes, we offer a 10% educational discount. There are additional discounts available for purchases of multiple units.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>What payment methods are accepted?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                We accept Purchase Orders, wire transfers and mailed in checks. Net 30 terms are also available with a 50% deposit.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>What kind of warranty do you have?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                We have a one-year unconditional warranty on the Learning Glass unit. The table has a limited 5-year warranty. Contact us for details on warranty for Studio Package components.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Do you work with integrators?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Yes, we have an AV integrator program. Please contact us <a href = "mailto: mcctwright@outlook.com">mcctwright@outlook.com</a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Can I get additional support?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                We are available M-F 9-5 PST (or by appointment for international customers). You can email us at mcctwright@outlook.com and we will generally get back to you within 24 hours.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Can I get assistance setting up my studio?</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Yes, we have an AV team available for installation and training for an additional charge. Training and support is available to advise on topics such as increasing faculty use, best practices for creating engaging videos, streaming content, configuring for video switching and streaming, integrating a one-button approach.

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            
          </div>
        )
    
}
