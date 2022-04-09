import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Paper, makeStyles } from "@material-ui/core";
import '../../static/css/projects.css';

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: "#030014"
    }
  }));

function ProjectsPage() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}> 
            <Grid container> 
                <Grid item xs={12} align="center">
                    <Box mt={20}>
                        <Typography className="projects" variant="h2" align="center">Projects</Typography>
                    </Box>
                </Grid>  
                <Grid item xs={12} align="center">
                    <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea href="https://github.com/xroyalphantom/xRoyalBot" target="_blank">
                                <CardMedia
                                    style={{
                                        width: "auto",
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                        float: "left",
                                        margin: "2vw",                                        
                                    }}
                                    component="img"
                                    image="../../static/images/xrp-removebg.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{marginTop: "1vw", fontSize: "2.5vw"}} align="left">
                                        xRoyalBot
                                    </Typography>
                                    <Typography variant="h6" style={{marginBottom: "1vw"}} align="left">
                                        JavaScript | REST APIs | Heroku
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Programmed JS discord bot that listens to custom commands to perform different tasks such as fetching Ethereum price from an API.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea href="https://github.com/xroyalphantom/SimonSWE" target="_blank">
                                <CardMedia
                                    style={{
                                        width: "auto",
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                        float: "left",
                                        margin: "2vw",                                        
                                    }}
                                    component="img"
                                    image="../../static/images/robot.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{marginTop: "1vw", fontSize: "2.5vw"}} align="left">
                                        SimonSWE
                                    </Typography>
                                    <Typography variant="h6" style={{marginBottom: "1vw"}} align="left">
                                        React | Django | JavaScript | Python | AWS | HTML/CSS
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Website using React and Material UI for the frontend; Django as the backend
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea href="https://github.com/xroyalphantom/Impossible-Invaders" target="_blank">
                                <CardMedia
                                    style={{
                                        width: "auto",
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                        float: "left",
                                        margin: "2vw",
                                        paddingTop: "1vw"                              
                                    }}
                                    component="img"
                                    image="../../static/images/invader.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{marginTop: "1vw", fontSize: "2.5vw"}} align="left">
                                        Impossible Invaders
                                    </Typography>
                                    <Typography variant="h6" style={{marginBottom: "1vw"}} align="left">
                                        Pygame | Python | OOP
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Used object-oriented programming in Python to create a game inspired by Space Invaders
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Implemented collision detection and increasing game difficulty with Pygame
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box className="cardbox">
                    <Card variant="outlined">
                            <CardActionArea>
                                <CardMedia
                                    style={{
                                        width: "auto",
                                        maxWidth: "200px",
                                        maxHeight: "200px",
                                        float: "left",
                                        margin: "2vw",
                                        paddingTop: "1vw",                                     
                                    }}
                                    component="img"
                                    image="../../static/images/monkey.png"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" style={{marginTop: "1vw", fontSize: "2.5vw"}} align="left">
                                        MONKE Assistant
                                    </Typography>
                                    <Typography variant="h6" style={{marginBottom: "1vw"}} align="left">
                                        Python | gTTS | Speech Recognition
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Integrated PyPI libraries in Python to program a bot that assists with simple tasks, such as capturing images, applying a filter to the images, then posting them onto Discord or Twitter via a bot using their APIs.
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Implemented unique voice commands with a Speech Recognition API that trigger various bot functions
                                    </Typography>
                                    <Typography paragraph align="left">
                                        ► Established randomized dialogue with gTTS’s API to converse with the user
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProjectsPage;