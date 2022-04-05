import {Link} from "react-router-dom";
import {Container, Toolbar, AppBar, IconButton, Typography, Box, Button} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import useStyles from "./Style";
import {useSelector} from "react-redux";


// Компонент Header


function Header() {

    // Стили
    const classes = useStyles()

    // Используем Redux

    const number = useSelector(state => state.number) // Получаем данные из стейта
    console.log(number)

    return (
        <AppBar position="relative">
            <Container>
                <Toolbar>
                    <Link to="/">
                        <IconButton>
                            <Home fontSize="large"/>
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>React Payment Project </Typography>
                    <Box>
                        <Typography variant="h7">{number}</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header