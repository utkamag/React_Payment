import {Link} from "react-router-dom";
import MaskedInput from 'react-text-mask';
import {Avatar, Typography, Grid, Button} from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";
import Home from "@material-ui/icons/Home";


function Payment() {

    // State

    const [numbers, setNumbers] = useState("")


    // Используем Redux

    const dispatch = useDispatch() // создаем диспатч


    // Ставим по дефолту

    const handleChange = (e) => {
        e.preventDefault()

        dispatch({type: "ADD_NUMBER", payload: numbers})

    }

    const number = useSelector(state => state.number) // Получаем данные из стейта


    // Стили

    const classes = useStyles()


    return (


        //Payment

        <Grid className="payment_container" container direction="column" alignItems="center"
              justifyContent="center">
            <Grid item xs={12}>
                <Avatar className="payment_avatar" style={{margin: '20px auto', display: "flex"}}>
                    <PhoneIphone color="primary" fontSize="large"/>
                </Avatar>
                <Typography color="inherit" align="center" variant="h2" style={{marginBottom: "40px"}}>Оплата
                    телефона</Typography>

                <form onSubmit={(e) => {
                    handleChange(e)
                }}>
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
                    />
                    <Button className={classes.paymentButton} color="primary" variant="contained"
                            size="large" type="submit">Оплатить</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Payment