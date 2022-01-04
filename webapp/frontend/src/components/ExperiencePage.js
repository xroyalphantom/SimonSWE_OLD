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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                <Box mt={10} mb={10} ml={30} mr={30}>
                        <Card variant="outlined">
                            <CardActionArea onClick={handleExpandClick}>
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
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            - 
                                        </Typography>
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
                                image="../../static/images/phsa.png"
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Full-Stack Developer @ Provincial Health Services Authority
                                </Typography>
                                </CardContent>
                                <ExpandMoreIcon />
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            - Developed a wiki page using C#, Blazor, JavaScript, SQL
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