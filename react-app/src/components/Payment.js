import {Link} from "react-router-dom";
import { Container, IconButton, Box } from "@material-ui/core";
import useStyles from "./Style";
import Home from "@material-ui/icons/Home";

function Payment() {
    const classes = useStyles()
    return (
        <Container className={classes.containerPaymen}>
            <Box>
                <Home fontSize="large"/>
            </Box>
        </Container>
    )
}

export default Payment