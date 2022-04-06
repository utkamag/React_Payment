
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
        paddingTop: "56.25%" // для того что-бы было изображение формаьа 16:9
    },
    cardContent: {
        flexGrow: "1"
    },
    companyButton: {
        justifyContent: "center"
    },
    // Footer

    footer: {
        marginTop: "75px"
    },
    footerBox: {
        display: "flex",
        justifyContent: "center",
        marginRight: "5px"
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
    }
}))

export default useStyles