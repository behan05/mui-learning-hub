
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: "#ff5733"
        },
        secondary: {
            main: "#33ff57"
        }
    },
    typography: {
        fontSize: "2rem"
    }
})

function App() {

    const CustomeButton = styled(Button)({
        color: "#fff",
        // backgroundColor: "purple",
        borderRadius: "12px",
        margin: "1rem 0",

        "&:hover": {
            backgroundColor: "green",
        }
    });

    return (
        <>
            <Button variant="contained" color="secondary"
                sx={{
                    background: 'purple',
                    color: "green",
                    "&:hover": {
                        color: "red"
                    }
                }} >
                Click Me
            </Button>

            <br />
            <CustomeButton variant="outlined">Click Me Again</CustomeButton>

            <br />
            <ThemeProvider theme={theme}>
                <Button color="primary" variant="outlined">
                    Button By Theme
                </Button>
            </ThemeProvider>
        </>
        // Props
        // styled
        // theme
    )
}

export default App