import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

function Navbar() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position='fixed' sx={{
            bgcolor: '#1e1e2f',
            boxShadow: 3,
            zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
            <Toolbar>

                {isMobile && (
                    <IconButton color='inherit' edge="start" aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                )}

                <Typography variant='h6' sx={{ flexGrow: 1 }}> Dashboard</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <NotificationsActiveIcon />
                    <Avatar alt="Profile icon" src="https://avatars.githubusercontent.com/u/83676505?v=4" />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;