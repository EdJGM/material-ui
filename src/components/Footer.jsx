import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import '../App.css'; // Import the global styles

const Footer = () => {
    return (
        <AppBar position="fixed" className="footer-bar" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar className="flex justify-center space-x-4">
                <Button color="inherit">Facebook</Button>
                <Button color="inherit">Instagram</Button>
                <Button color="inherit">Twitter</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;