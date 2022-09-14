import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Paper, makeStyles } from "@material-ui/core";
import '../../static/css/experience.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Collapse } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: "#011F44"
    }
  }));

function ExperiencePage() {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
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
                            <CardActionArea onClick={handleExpandClick3}>
                                <CardMedia
                                style={{
                                    width: "auto",
                                    maxHeight: "120px",
                                    padding: "25px"
                                }}
                                component="img"
                                image="../../static/images/gsoft.png"
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Full-Stack Engineer @ GSoft
                                </Typography>
                                </CardContent>
                                {expanded3 && <ExpandMoreIcon />}
                                {!expanded3 && <ExpandLessIcon />}
                                <Collapse in={expanded3} timeout="auto" unmountOnExit>
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
                                {expanded2 && <ExpandMoreIcon />}
                                {!expanded2 && <ExpandLessIcon />}
                                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                        ► Redesigned a web application used internationally for education verification services utilizing Angular (TypeScript), Bootstrap, HTML/CSS for the front-end and .NET Core along with ABP as a framework for the backend
                                        </Typography>
                                        <Typography paragraph>
                                        ► Built RESTful APIs using Entity Framework (C#), Microsoft SQL Server, and Azure to process over 10k subject verifications per month as well as create per-organization subscriber accounts, currently generating $1.3 million in revenue annually on the old site
                                        </Typography>
                                        <Typography paragraph>
                                        ► Integrated Bambora Payment SDK into the web application to make requests to the payment gateway via third-party API to allow clients to store card profiles as well as make payments through Bambora
                                        </Typography>
                                        <Typography paragraph>
                                        ► Designed and implemented data models with relational databases, to store the company's accounting information such as tax reporting info, payment amounts, and user balance tracking
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
                                {expanded1 && <ExpandMoreIcon />}
                                {!expanded1 && <ExpandLessIcon />}
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