import {Avatar, Button, Grid, IconButton, Typography, Container} from "@material-ui/core";
import {Link} from "react-router-dom";
import Home from "@material-ui/icons/Home";
import useStyles from "./Style";

function Error() {

    // Стили

    const classes = useStyles()

    return (
        <Container className={classes.error}>
            <Typography className={classes.errorMainText} align="center" color="primary" variant="h2">Ошибка 404,
                страница не найдена</Typography>
            <Typography align="center" color="textPrimary" variant="h4">Линк на главную страцниу</Typography>
            <IconButton>
                <Link to="/">
                    <Home fontSize="large"/>
                </Link>
            </IconButton>
        </Container>
    )
}

export default Error