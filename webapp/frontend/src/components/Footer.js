import { Box, Typography } from "@material-ui/core";
import React from "react";
import '../../static/css/footer.css';

function Footer() {
    return (
        <div className="footer">
            <Box>
                <Typography style={{color:"#fff"}} variant="subtitle1" align="center">
                    © Simon_SWE
                </Typography>
                <Typography style={{color:"#fff"}} variant="subtitle2" align="center">
                    Made with Django & React
                </Typography>
            </Box>
        </div>
    );
}

export default Footer;
