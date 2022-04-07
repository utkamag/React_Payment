import {Container, Toolbar, AppBar, IconButton, Typography, Box, Button, Paper} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import useStyles from "./Style";
import Header from "./Header";


function Description() {
    const classes = useStyles()
    return (
    <Container fixed>
        <Paper elevation={1}>
            <div className={classes.descriptionmain}>
                <Typography className={classes.description_title} variant="h2">Сервис по оплате мобильной связи</Typography>
                <Typography className={classes.description_title2} variant="h4">Пополнение счёта онлайн</Typography>
                <Typography variant="h8" className="description_pay">Комисия за пополнение - 0%</Typography>
            </div>
        </Paper>
    </Container>
)
}

export default Description