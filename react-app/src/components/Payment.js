import {Link, useNavigate} from "react-router-dom";
import MaskedInput from 'react-text-mask';
import {Avatar, Typography, Grid, Button, Container, Toolbar, IconButton, Box, AppBar} from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Home from "@material-ui/icons/Home";
import {useForm} from "react-hook-form";


function Payment() {

    //Редирект используем хук useNavigate

    let navigate = useNavigate()

    //State

    const [change, setChange] = useState(0) // По нажатию кнопки, сработает хук useEffect,
    // (стейт передаем в массив зависимости useEffect)

    //Эмулируем запрос на сервер. Генерируем рандомное число от 0 до 10. Если число 0-5 => успешная оплата,
    // Если число 6-10 => оплата прошла неуспешно

    useEffect(() => {

        //Рандомное число от 0 до 10 (число 10 включительно)

        const Random = Math.floor(Math.random() * 11);


        if (Random >= 6) {
            navigate("/passed")
        } else {
            navigate("/notpassed")
        }


    }, [change])

    // Изменяем стейт

    let addChange = () => {
        setChange(1)
    }


    // State

    const [numbers, setNumbers] = useState("") // Используем данные из локального стейта в action (передаем через dispatch)


    // Используем Redux

    const dispatch = useDispatch() // создаем диспатч


    // Submit

    const handleChange = (e) => {
        e.preventDefault()

        dispatch({type: "ADD_NUMBER", payload: numbers})

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
                    <Avatar className="payment_avatar" style={{margin: '20px auto', display: "flex"}}>
                        <PhoneIphone color="primary" fontSize="large"/>
                    </Avatar>
                    <Typography color="inherit" align="center" variant="h2" style={{marginBottom: "40px"}}>Оплата
                        телефона</Typography>

                    <form onSubmit={handleChange}>
                        <MaskedInput
                            value={numbers}
                            onChange={(e) => setNumbers(e.target.value)}
                            className="payment_phone"
                            placeholder="Номер телефона"
                            mask={[/\d/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        />
                        <input type="number"
                               className="payment_money"
                               placeholder="Сумма ₽"
                               min={1}
                               max={1000}
                        />
                        <Typography color={"textSecondary"} align="center" variant={"subtitle2"}>*минимальная сумма
                            оплаты 1₽, максимальная 1000₽</Typography>
                        <Button className={classes.paymentButton} color="primary" variant="contained"
                                size="large" type="submit" onClick={addChange}>Оплатить</Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Payment