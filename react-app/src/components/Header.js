import { Link } from "react-router-dom";
import { Container, Toolbar, AppBar, IconButton, Typography, Box, Button } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import useStyles from "./Style";


// Компонент Header

function Header() {
    const classes = useStyles()
    return (
        <AppBar position="relative">
            <Container>
                <Toolbar>
                    <Link to="/">
                        <IconButton>
                        <Home fontSize="large"/>
                    </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>React Payment Project</Typography>
                    <Box>
                        <Button variant="outlined">Войти</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header