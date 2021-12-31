import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, CardActions, Box, Paper } from "@material-ui/core";
import Resume from "../../static/files/SimonHuang_Resume.pdf";
import Image from "../../static/images/SpaceWallpaper.jpg";

import '../../static/css/homepage.css';
import ParallaxJSXWrapper from "./ParallaxJSXWrapper";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

function HomePage() {
    const Name = ParallaxJSXWrapper(<div className="name">Simon Huang</div>, 0.05);
    const Space = ParallaxJSXWrapper(<img src="../../static/images/SpaceWallpaper.jpg" alt="" className="space" />, 0.01);

    const Section2 = ParallaxJSXWrapper(
		<div className="section2">
			<svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#572148" viewBox="0 0 100 100" preserveAspectRatio="none" >
				<path d="M0,100 C20,-80 26,90 100,100" />
			</svg>

			<div className="section2_container">
                <div className="left">
					<img src="https://picsum.photos/1200/1200" alt="" className="image" />
				</div>
                <div className="right">
					<p className="aboutme">
                        UWaterloo SE 2025
                    </p> 
                    <a href="https://github.com/xroyalphantom" className="button" target="_blank">GitHub</a>
                    <a href="https://linkedin.com/in/simon-d-huang" className="button" target="_blank">LinkedIn</a>
                    <a href={Resume} target="_blank" className="button">Resume</a>
                </div>
			</div>
		</div>
		, 0.03);

        const Section3 = ParallaxJSXWrapper(
            <div className="section3">
                
            </div>
            , 0.03);

    return (
        <div className="main-container">
            <div className="section1">
                <Space />
                <Name />
            </div>
            <Section2 />
            <Section3 />
        </div>
        
    );
}

export default HomePage;

/*
<Grid container> 
    <Grid item xs={12} align="center">
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                width: '100%',
                height: 500,
            },
        }} >
            <Paper style={styles.paperContainer}>
                <Box sx={{m: 10}}>
                    <Typography className="name" variant="h2" align="center">Simon Huang</Typography>
                </Box>
            </Paper>
        </Box>
    </Grid>
    <Grid item xs={4}>
        <Box sx={{ width: '80%', m:10}}>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                        Engineer of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        Simon Huang
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        UWaterloo SE 25'
                    </Typography>
                    <Typography variant="body2">
                        Full-Stack Developer
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={Resume} target="_blank" variant="outlined">RESUME</Button>
                </CardActions>
            </Card>
        </Box>
    </Grid>
    <Grid item xs={8}>
        <Box sx={{ width: '80%', m:10 }}>
            <Typography style={{ color:"#fff", width: '95%'}} variant="h4" align="center">
                About Me
            </Typography>
        </Box>
    </Grid>
</Grid>
*/