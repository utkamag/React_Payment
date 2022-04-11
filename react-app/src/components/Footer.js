import React from "react";
import {Box, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./Style";

function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Box className={classes.footerBox}>

                <Box className={classes.footerIcon}>
                    <GitHubIcon fontSize="small" color="primary"/>
                </Box>
                <a href="https://github.com/utkamag/React_Payment">
                    <Typography variant="button" className={classes.footerLink}>utkamag</Typography>
                </a>
            </Box>
        </footer>
    )
}

export default Footer;