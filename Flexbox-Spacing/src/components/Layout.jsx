import { Box, Grid, Typography } from '@mui/material';
import Header from "./Header";

function Layout({ children }) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* Header */}
            <Header />

            {/* Main section with Sidebar + Content */}
            <Box display="flex" flex="1">
                {/* Sidebar */}
                <Box
                    width={{ xs: '100%', sm: '25%', md: '16.66%' }}
                    bgcolor="#121414"
                    color="#fff"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    {['Home', 'About', 'Blog'].map((text) => (
                        <Typography
                            component="a"
                            href="#"
                            key={text}
                            sx={{
                                textDecoration: "none",
                                fontSize: "1.2rem",
                                background: "#C85ADA",
                                padding: "0.5rem 1.1rem",
                                borderRadius: "8px",
                                color: "white"
                            }}
                        >
                            {text}
                        </Typography>
                    ))}
                </Box>

                {/* Main Content */}
                <Box flex="1" p={2}>
                    <Grid container spacing={2}>
                        {children}
                    </Grid>
                </Box>
            </Box>

            {/* Footer */}
            <Box bgcolor="#121414" color="white" p={2} textAlign="center">
                <Typography variant="body2">© 2025 Your Company</Typography>
            </Box>
        </Box>
    );
}

export default Layout;
