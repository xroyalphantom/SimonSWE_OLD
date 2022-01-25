import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Paper, makeStyles } from "@material-ui/core";
import '../../static/css/experience.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: "#030014"
    }
  }));

function ExperiencePage() {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const classes = useStyles();

    return (
        <Paper className={classes.paper}> 
            <Grid container> 
                <Grid item xs={12} align="center">
                    <Box mt={20}>
                        <Typography className="experience" variant="h2" align="center">Experience</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} align="center">
                <Box className="cardbox">
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick2}>
                                <CardMedia
                                style={{
                                    width: "auto",
                                    maxHeight: "200px"
                                }}
                                component="img"
                                image="../../static/images/auradata.png"
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    C# Developer @ AuraData
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            
                                        </Typography>
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
                                image="../../static/images/phsa.png"
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Full-Stack Developer @ Provincial Health Services Authority
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                        ► Developed a .NET Core web application that supports over 500 capital projects and applications, 3000 servers, and other vital systems that are used to operate the healthcare system for the province of BC
                                        </Typography>
                                        <Typography paragraph>
                                        ► Implemented a role-based access security layer to prevent users with insufficient permissions from editing and/or viewing sensitive health care information
                                        </Typography>
                                        <Typography paragraph>
                                        ► Conducted C#, SQL, and Javascript software debugging across a large codebase while piloting agile implementation
                                        </Typography> 
                                        <Typography paragraph>
                                        ► Led design and development of front-end and back-end portions of a wiki page using C#, Javascript, Blazor, and MS SQL Server    
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

export default ExperiencePage;