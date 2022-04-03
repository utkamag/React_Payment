
// Для стилизации используем хук useStyles

import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // Header

    root: {
        flexGrow: 1
    },

    title: {
        flexGrow: 1
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

    avatar: {
        margin: theme.spacing(2),
        padding: "20px",
    }
}))

export default useStyles