import React from 'react';
import { Button, useTheme } from '@mui/material';

function App() {

    const theme = useTheme();
    // console.log(theme.palette); // log the entire palette

    return (
        <Button variant='contained' sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.light
        }}>Click Me Bhai</Button>
    )
}

export default App;