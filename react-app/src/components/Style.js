// Для стилизации используем хук useStyles

import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({


    // Header

    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },


    // Company

    cardGrid: {
        padding: "50px 0"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%", // для того что-бы было изображение формаьа 16:9
        width: "100%",
    },
    cardContent: {
        flexGrow: "1"
    },
    companyButton: {
        justifyContent: "center"
    },

    // Footer

    footer: {
        marginTop: "120px",
        padding: "10px"
    },
    footerBox: {
        display: "flex",
        justifyContent: "center"
    },
    footerIcon: {
        marginRight: "5px"
    },
    footerLink: {
        '&:hover': {
            color: "#002984",
        },
        textDecoration: "none"
    },

    // Payment

    paymentButton: {
        display: "flex",
        marginTop: "15px",
        textAlign: "center",
        margin: '10px auto'
    },

    titlePay: {
        flexGrow: 1,
    },

    // Error

    error: {
        textAlign: "center",
        padding: "175px",
        marginTop: "40px"

    },
    errorMainText: {
        marginBottom: "20px"
    },

    // Megafon

    cardMediaMegafon: {
        paddingTop: "25.25%",
        width: "100%",
    },

    // MTC

    cardMediaMTC: {
        paddingTop: "25.25%",
        width: "100%",
    },

    // Yota

    cardMediaYota: {
        paddingTop: "30.25%",
        width: "100%",
    },



    // Адаптация под мобильные устройства

    //description

    description_title: {

        [theme.breakpoints.down('sm')]: {
            fontSize: "35px",
        },
    },

    description_title2: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
        },

    },

    //payment

    payment_container: {

        [theme.breakpoints.down('sm')]: {
            marginTop: "190px"
        },

        [theme.breakpoints.down('md')]: {
            marginTop: "100px"
        },
    },

}))

export default useStyles