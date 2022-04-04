import {Link} from "react-router-dom";
import MaskedInput from 'react-text-mask';
import {Container, Avatar, Box, Typography, TextField, Grid, Button} from "@material-ui/core";
import useStyles from "./Style";
import {PhoneIphone} from "@material-ui/icons";
import {useState} from "react";


function Payment() {

    // Стили

    const classes = useStyles()

    // Используем хук state

    const [number, setNumber] = useState("")

    // Изменяем number

    const handleChange = (e) => {
        setNumber(e.target.value)
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
                        value={number}
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
                        size="large">Оплатить</Button>
            </Grid>
        </Grid>
    )
}

export default Payment