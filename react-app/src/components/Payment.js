import {Link} from "react-router-dom";
import { Container, IconButton, Box } from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";

function Payment() {
    const classes = useStyles()
    return (
        <Container className={classes.containerPaymen}>
            <Box>
                <PhoneIphone fontSize="large"/>
            </Box>
        </Container>
    )
}

export default Payment