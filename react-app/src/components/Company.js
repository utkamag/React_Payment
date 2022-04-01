import {Link} from "react-router-dom";
import {Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import useStyles from "./Style";


function Company() {
    const classes = useStyles()
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={9}>

                <Grid item xs={9} md={12} lg={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/Company/megafon.jpg"
                            title="Card_media"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5">
                                Мегафон
                            </Typography>
                        </CardContent>
                        <Link to="/payment">
                            <CardActions className={classes.companyButton}>
                                <Button color="primary" variant="outlined">Оплатить связь</Button>
                            </CardActions>
                        </Link>
                    </Card>
                </Grid>


                <Grid item xs={9} md={12} lg={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/Company/MTC.jpg"
                            title="Card_media"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5">
                                МТС
                            </Typography>
                        </CardContent>
                        <Link to="/payment">
                            <CardActions className={classes.companyButton}>
                                <Button color="primary" variant="outlined">Оплатить связь</Button>
                            </CardActions>
                        </Link>
                    </Card>
                </Grid>


                <Grid item xs={9} md={9} lg={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/Company/yota.jpg"
                            title="Card_media"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5">
                                Yota
                            </Typography>
                        </CardContent>
                        <Link to="/payment">
                            <CardActions className={classes.companyButton}>
                                <Button color="primary" variant="outlined">Оплатить связь</Button>
                            </CardActions>
                        </Link>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Company