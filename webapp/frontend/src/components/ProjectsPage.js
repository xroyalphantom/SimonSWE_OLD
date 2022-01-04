import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Box, Paper, makeStyles } from "@material-ui/core";
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
            </Grid>
        </Paper>
    );
}

export default ProjectsPage;