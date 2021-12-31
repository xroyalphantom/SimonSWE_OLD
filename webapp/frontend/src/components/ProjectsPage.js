import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, {Component} from "react";
import { Box } from "@material-ui/core";

export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container> 
                <Grid item xs={12} align="center">
                    <Box sx={{ width: '100%', mt: 5, mb: 2 }}>
                        <Typography style={{color:"#fff"}}  variant="h2" align="center">
                            Projects
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}