import {Link} from "react-router-dom";
import MaskedInput from 'react-text-mask';
import {Container, Avatar, Box, Typography, TextField, Grid, Button} from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


function Payment() {

    // Используем Redux

    const dispatch = useDispatch() // создаем диспатч

    const number = useSelector(state => state.number) // Получаем данные из стейта


    const click1 = (numbers) => {
        dispatch({type:"ADD_NUMBER", payload: numbers})
    }



    // Стили

    const classes = useStyles()

    // Используем хук state

    const [numbers, setNumbers] = useState("")

    // Изменяем number

    const handleChange = (e) => {
        setNumbers(e.target.value)
    }

    return (
        <Grid className="payment_container" container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Avatar className="payment_avatar" style={{margin: '20px auto', display: "flex"}}>
                    <PhoneIphone color="primary" fontSize="large"/>
                </Avatar>
                <Typography color="inherit" align="center" variant="h2" style={{marginBottom: "40px"}}>Оплата
                    телефона</Typography>

                <form>
                    <MaskedInput
                        value={numbers}
                        onChange={handleChange}
                        className="payment_phone"
                        placeholder="Номер телефона"
                        mask={[/\d/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    />
                    <input type="number"
                           className="payment_money"
                           placeholder="Сумма ₽"
                    />

                </form>

                <Button className={classes.paymentButton} color="primary" variant="contained"
                        size="large" onClick={() => click1()}>Оплатить</Button>
                <div>{number}</div>
            </Grid>
        </Grid>
    )
}

export default Payment