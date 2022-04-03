import {Link} from "react-router-dom";
import {Container, Avatar, Box, Typography, TextField} from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";

function Payment() {
    const classes = useStyles()
    return (
        <div className="container_payment">
            <div className="payment_avatar">
                <PhoneIphone color="primary" fontSize="large"/>
            </div>
            <Typography color="inherit" align="center" variant="h2">Оплата телефона</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />

        </div>
    )
}

export default Payment