import {Link, useNavigate} from "react-router-dom";
import MaskedInput from 'react-text-mask';
import {Typography, Grid, Button, Container, Toolbar, IconButton, Box, AppBar, CardMedia, Card} from "@material-ui/core";
import useStyles from "./Style";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Home from "@material-ui/icons/Home";
import {IMaskInput} from "react-imask";


function PaymentMTC() {

    //Редирект используем хук useNavigate

    let navigate = useNavigate()


    // State

    const [numbers, setNumbers] = useState("") // Используем данные из локального стейта в action (передаем через dispatch)


    // Используем Redux

    const dispatch = useDispatch() // создаем диспатч


    // Submit

    //Эмулируем запрос на сервер. Генерируем рандомное число от 0 до 10. Если число 0-3 => неуспешная оплата,
    // Если число 4-10 => оплата прошла успешно

    const handleChange = (e) => {
        e.preventDefault()

        dispatch({type: "ADD_NUMBER", payload: numbers})

        //Рандомное число от 0 до 10 (число 10 включительно)

        const Random = Math.floor(Math.random() * 11);

        if (Random >= 4) {
            navigate("/passed")
        } else {
            navigate("/notpassed")
        }

    }

    // Получаем данные из стейта

    const number = useSelector(state => state.number)


    // Стили

    const classes = useStyles()


    return (
        //Header component
        <Box>
            <AppBar>
                <Container>
                    <Toolbar>
                        <Link to="/">
                            <IconButton>
                                <Home fontSize="large"/>
                            </IconButton>
                        </Link>
                        <Typography variant="h6" className={classes.titlePay}>React Payment Project</Typography>
                        <Box>
                            <Typography variant="h7">{number}</Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Grid className="payment_container" container direction="column" alignItems="center" // Payment component
                  justifyContent="center">

                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMediaMTC}
                            image="/images/Company/MTC.jpg"
                            title="Card_media"
                        />
                    </Card>
                    <Typography color="inherit" align="center" variant="h2" style={{marginBottom: "40px", marginTop:"10px"}}>Оплата
                        телефона</Typography>

                    <form onSubmit={handleChange}>
                        <IMaskInput
                            unmask={false}
                            value={numbers}
                            required={true}
                            onChange={(e) => setNumbers(e.target.value)}
                            placeholder="Номер телефона"
                            mask="8-000-000-00-00"
                            radix="."
                            minlength="15"
                            className="payment_phone"
                        />
                        <input type="number"
                               className="payment_money"
                               placeholder="Сумма ₽"
                               min={1}
                               max={1000}
                               required={true}
                        />
                        <Typography color={"textSecondary"} align="center" variant={"subtitle2"}>*минимальная сумма
                            оплаты 1₽, максимальная 1000₽</Typography>
                        <Button className={classes.paymentButton} color="primary" variant="contained"
                                size="large" type="submit">Оплатить</Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PaymentMTC