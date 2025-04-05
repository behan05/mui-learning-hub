import * as React from 'react';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (state) => () => setOpen(state);

    return (
        <React.Fragment>
            <AppBar position='fixed' sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        edge="start"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' sx={{ flexGrow: 1 }}>Dashboard</Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor='left'
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        bgcolor: "#f0f0f0",
                        width: 250,
                        padding: 1
                    }
                }}
            >
                <Box p={2} mt={2}>
                    <Typography variant='h6'>Menu</Typography>
                    <Button variant='outlined' sx={{ mt: 1 }} fullWidth color='primary' >Home</Button>
                    <Button variant='outlined' sx={{ mt: 1 }} fullWidth color='primary'>About</Button>
                    <Button variant='outlined' sx={{ mt: 1 }} fullWidth color='primary'>No Way Home</Button>
                    <Button variant='outlined' sx={{ mt: 1 }} fullWidth color='primary'>blog</Button>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default Sidebar;