import { Link } from "react-router-dom";
import { TableFooter, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import useStyles from "./Style";

function Footer() {
    const classes = useStyles()
    return(
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom color="textSecondary">
                2022
            </Typography>
        </footer>
    )
}

export default Footer