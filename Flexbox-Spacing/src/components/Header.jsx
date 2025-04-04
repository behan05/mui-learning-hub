import { Box, Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Header() {
    return (
        <Box
            bgcolor="#121414"
            color="#fff"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
            p={2}
        >
            <Typography variant='h4' >Company Logo</Typography>

            {/* Navbar links */}
            <Box display="flex" gap={3}>
                <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit", fontSize: "1.2rem", "&:hover": { color: "#61dafb" } }}>Home</Typography>
                <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit", fontSize: "1.2rem", "&:hover": { color: "#61dafb" } }}>Projects</Typography>
                <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit", fontSize: "1.2rem", "&:hover": { color: "#61dafb" } }}>Subjects</Typography>
            </Box>

            {/* Navbar Button  */}

            <Box display="flex" gap={2}>
                <Button variant='outlined' color='secondary' startIcon={<LoginIcon />}>Login</Button>
                <Button variant='outlined' color='secondary' startIcon={<VpnKeyIcon />}>Signup</Button>
            </Box>
        </Box>
    )
}

export default Header