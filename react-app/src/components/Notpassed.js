import {Avatar, Button, Grid, Typography} from "@material-ui/core";
import {Warning} from "@material-ui/icons";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Footer from "./Footer";

function Notpassed() {

    //Автоматиечский редирект используем хук useNavigate

    let navigate = useNavigate()

    //Используем хук, с функционалом componentdidmount

    useEffect(() => {

        let link2 = () => {
            navigate("/")
        }

        setTimeout(link2, 3000)


    }, [])

    return (
        <Grid className="payment_container" container direction="column" alignItems="center"
              justifyContent="center">

            <Grid item xs={12}>
                <Avatar className="notpassed_avatar" style={{margin: '20px auto', display: "flex"}}>
                    <Warning color="inherit" fontSize="large"/>
                </Avatar>
                <Typography color="error" align="center" variant="h2" style={{marginBottom: "40px"}}>Ошибка при
                    оплате</Typography>
                <Typography color="inherit" align="center" variant="h4" style={{marginBottom: "40px"}}>Переадресация на
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

export default Notpassed