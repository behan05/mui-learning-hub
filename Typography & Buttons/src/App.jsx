import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typography, ThemeProvider, createTheme, Button } from "@mui/material";
import { useEffect, useRef } from "react";


gsap.registerPlugin(useGSAP);

const theme = createTheme({
    typography: {
        body1: {
            fontSize: "1.2rem",
            fontWeight: "bold"
        },
        h4: {
            color: "#fff",
            fontWeight: "bold"
        }
    }
})

function App() {

    const headerRef = useRef(null);


    useGSAP(() => {
        gsap.from(headerRef.current, {
            opacity: 0,
            y: -50,
            color: "red",
            duration: 0.4
        })
    }, []);


    return (
        <ThemeProvider theme={theme}>

            <header>
                <Typography variant="h4">Site Name</Typography>
                <nav>
                    <Typography variant="subtitle1">Home</Typography>
                    <Typography variant="subtitle1">Support</Typography>
                    <Typography variant="subtitle1">Projects</Typography>
                    <Typography variant="subtitle1">Resume</Typography>
                </nav>
            </header>

            <Typography
                variant="h1"
                color="secondary"
                align="center"
                ref={headerRef}
                sx={{ mb: 3 }}
            >
                Welcome to my site
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur aperiam culpa cumque illum distinctio perspiciatis ea quisquam mollitia, quidem, qui ducimus! Incidunt perferendis placeat fuga voluptatem cum? Nam, distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque doloribus, cupiditate porro nostrum aliquam eius tenetur distinctio nemo. Itaque, ipsam! Qui magnam, tempore quisquam atque eius ipsa similique repellendus. Minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore delectus tempora tempore, veniam debitis reprehenderit quos iusto vero reiciendis voluptates ab atque perspiciatis. Voluptas, provident illo dolores nulla incidunt nemo.
                Ex odit deleniti praesentium ducimus culpa omnis quia nesciunt maiores sunt ipsam facilis numquam iste labore doloribus assumenda hic vel distinctio, ipsum commodi minima at possimus nihil alias corrupti. Perspiciatis.
                Numquam ad dolores incidunt expedita fugit quibusdam sapiente, officia vitae atque ut magni, nulla animi, enim id ipsum illum natus labore voluptate illo beatae distinctio voluptatibus in! Sed, voluptates cum?
            </Typography>
            <Button variant="outlined" color="secondary">Click Me</Button>

        </ThemeProvider>
    )
}

export default App;