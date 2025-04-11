
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    // palette is nothing its just a fancy name is contains color of app.
    palette: {
        mode: "light",

        primary: {
            main: "#1a8e88", // use MUI by default instead pre-defined.
            light: "#4dd0e1",
            dark: "#000",
            contrastText: "#fff"
        },
        secondary: {
            main: "#color",  // MUI used this by default
            light: "#color",
            dark: "#color",
            contrastText: "#color"
        },
        error: {
            main: "#color",  // MUI used this by default
            light: "#color",
            dark: "#color",
            contrastText: "#color"
        },
        success: {
            main: "#color",  // MUI used this by default
            light: "#color",
            dark: "#color",
            contrastText: "#color"
        },
        info: {
            main: "#color",  // MUI used this by default
            light: "#color",
            dark: "#color",
            contrastText: "#color"
        },
        warning: {
            main: "#color",  // MUI used this by default
            light: "#color",
            dark: "#color",
            contrastText: "#color"
        },

        background: {
            default: "#000",
            paper: "#fff"
        },

        text: {
            primary: "#212121",
            secondary: "#757575",
            disabled: "#bdbdbd"
        },

        divider: "#e0e0e0",
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 16
                }
            }
        }
    }
})