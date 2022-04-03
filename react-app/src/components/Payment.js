import {Link} from "react-router-dom";
import {Container, Avatar, Box, Typography, Grid} from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";

function Payment() {
    const classes = useStyles()
    return (
        <Grid className={classes.containerPaymen} container direction="column" alignContent="center" justifyContent="center">
            <Avatar className={classes.avatar}>
                <PhoneIphone color="primary" fontSize="large"/>
            </Avatar>
            <Typography color="inherit" align="center" variant="h2">Оплата телефона</Typography>
        </Grid>
    )
}

export default Payment