import {useNavigate} from "react-router-dom"
import {Avatar, Button, Grid, Typography} from "@material-ui/core";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {CloudDone} from "@material-ui/icons";
import {useEffect} from "react";
import useStyles from "./Style";

function Passed() {
    // Стили

    const classes = useStyles()

    //Автоматиечский редирект используем хук useNavigate

    let navigate = useNavigate()

    //Используем хук, с функционалом componentdidmount


    useEffect(() => {

        let link1 = () => {
            navigate("/")
        }

        setTimeout(link1, 3000)

    }, [])

    return (

        <Grid className="payment_container" container direction="column" alignItems="center"
              justifyContent="center">
            <Grid item xs={12}>
                <Avatar className="passed_avatar" style={{margin: '20px auto', display: "flex"}}>
                    <CloudDone color="inherit" fontSize="large"/>
                </Avatar>
                <Typography className="passedTitle" color="primary" align="center" variant="h2" style={{marginBottom: "40px"}}>Оплата прошла
                    успешно!</Typography>
                <Typography className="passedTitle2" color="inherit" align="center" variant="h4" style={{marginBottom: "40px"}}>Переадресация на
                    главную страницу через 3 секунды</Typography>
            </Grid>

            <Grid item xs={12}>
                <CountdownCircleTimer
                    isPlaying
                    duration={3}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[3, 2, 1, 0]}
                >
                    {({remainingTime}) => remainingTime}
                </CountdownCircleTimer>
            </Grid>

        </Grid>
    )
}

export default Passed