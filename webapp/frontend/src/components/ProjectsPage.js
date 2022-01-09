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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Paper className={classes.paper}> 
            <Grid container> 
                <Grid item xs={12} align="center">
                    <Box mt={20}>
                        <Typography className="projects" variant="h2" align="center">Projects</Typography>
                    </Box>
                </Grid>  
                <Grid item xs={12} align="center">
                <Box mt={10} mb={10} ml={30} mr={30}>
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick}>
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
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography variant="h6">
                                            React | Django | JavaScript | Python | AWS | HTML/CSS
                                        </Typography>
                                        <Typography paragraph>
                                            Website using React for frontend and Django as the backend
                                        </Typography>
                                        <a href="https://github.com/xroyalphantom/SimonSWE" target="_blank">GitHub</a>
                                    </CardContent>
                                </Collapse>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box mt={10} mb={10} ml={30} mr={30}>
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick}>
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
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography variant="h6">
                                            Pygame | Python
                                        </Typography>
                                        <Typography paragraph>
                                            
                                        </Typography>
                                        <a href="https://github.com/xroyalphantom/Impossible-Invaders" target="_blank">GitHub</a>
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