import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Box, Card, CardContent, CardActions, CardMedia, CardActionArea } from "@material-ui/core";
import Image from "../../static/images/SpaceWallpaper.jpg";
import '../../static/css/experience.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from "@mui/material";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    },
};

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function ExperiencePage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container> 
            <Grid item xs={12} align="center">
                <Box mt={20}>
                    <Typography className="experience" variant="h2" align="center">Experience</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} align="center">
                <Box mt={10} mb={10} ml={30} mr={30}>
                    <Card variant="outlined" sx={{}}>
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
    );
}

export default ExperiencePage;