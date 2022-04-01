import {Container, Toolbar, AppBar, IconButton, Typography, Box, Button, Paper} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import useStyles from "./Style";


function Description() {
    const classes = useStyles()
    return (
        <Container fixed>
            <Paper elevation={1}>
                <div className="description_main">
                    <Typography variant="h2">Сервис по оплате мобильной связи</Typography>
                    <Typography variant="h4">Пополнение счёта онлайн</Typography>
                    <Typography variant="h8" className="description_pay">Комисия за пополнение - 0%</Typography>
                </div>
            </Paper>
        </Container>

    )
}

export default Description