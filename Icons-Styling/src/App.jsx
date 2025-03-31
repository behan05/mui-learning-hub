import React from 'react';
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCallIcon from '@mui/icons-material/AddCall';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

function App() {
    return (
        <>
            <Button variant="outlined" startIcon={<HomeIcon />} sx={{m: "10px"}}>Home</Button>
            <Button variant="outlined" startIcon={<AddCallIcon /> } sx={{m: "10px"}}>Call ME</Button>
            <Button variant="outlined" startIcon={<AccessibilityIcon />}>Accessibility</Button>
        </>
    )
}

export default App;