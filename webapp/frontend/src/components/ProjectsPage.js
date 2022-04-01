import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Paper, makeStyles } from "@material-ui/core";
import '../../static/css/projects.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: "#030014"
    }
  }));

function ProjectsPage() {
    const classes = useStyles();
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    }

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
                            <CardActionArea onClick={handleExpandClick4}>
                                <CardMedia
                                style={{
                                    width: "auto",
                                    maxHeight: "200px"
                                }}
                                component="img"
                                image=""
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    xRoyalBot
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded4} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="h6">
                                            JavaScript | REST APIs
                                        </Typography>
                                        <Typography paragraph>
                                            ► Programmed JS discord bot that listens to custom commands to perform different tasks such as fetching Ethereum price from an API.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick3}>
                                <CardMedia
                                style={{
                                    width: "auto",
                                    maxHeight: "200px"
                                }}
                                component="img"
                                image=""
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    SimonSWE
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography variant="h6">
                                            React | Django | JavaScript | Python | AWS | HTML/CSS
                                        </Typography>
                                        <Typography paragraph>
                                            ► Website using React for frontend and Django as the backend
                                        </Typography>
                                        <a href="https://github.com/xroyalphantom/SimonSWE" target="_blank">GitHub</a>
                                    </CardContent>
                                </Collapse>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick2}>
                                <CardMedia
                                style={{
                                    width: "auto",
                                    maxHeight: "200px"
                                }}
                                component="img"
                                image=""
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Impossible Invaders
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="h6">
                                            Pygame | Python
                                        </Typography>
                                        <Typography paragraph>
                                            ► Used object-oriented programming in Python to create a game inspired by Space Invaders
                                        </Typography>
                                        <Typography paragraph>
                                            ► Implemented collision detection and increasing game difficulty with Pygame
                                        </Typography>
                                        <a href="https://github.com/xroyalphantom/Impossible-Invaders" target="_blank">GitHub</a>
                                    </CardContent>
                                </Collapse>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick1}>
                                <CardMedia
                                style={{
                                    width: "auto",
                                    maxHeight: "200px"
                                }}
                                component="img"
                                image=""
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    MONKE Assistant
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="h6">
                                            Python | gTTS | Speech Recognition
                                        </Typography>
                                        <Typography paragraph>
                                            ► Integrated PyPI libraries in Python to program a bot that assists with simple tasks, such as capturing images, applying a filter to the images, then posting them onto Discord or Twitter via a bot using their APIs.
                                        </Typography>
                                        <Typography paragraph>
                                            ► Implemented unique voice commands with a Speech Recognition API that trigger various bot functions
                                        </Typography>
                                        <Typography paragraph>
                                            ► Established randomized dialogue with gTTS’s API to converse with the user
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProjectsPage;