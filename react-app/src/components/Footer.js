import {Box,Typography} from "@material-ui/core";
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

                <Link to="https://github.com/utkamag">
                    <Typography variant="button" className={classes.footerLink}>utkamag</Typography>
                </Link>

            </Box>
        </footer>
)
}

export default Footer