import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../App.css'; // Import the global styles

const Footer = () => {
    return (
        <AppBar position="fixed" className="footer-bar" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar className="flex justify-center space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <IconButton color="inherit">
                        <FacebookIcon />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <IconButton color="inherit">
                        <InstagramIcon />
                    </IconButton>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <IconButton color="inherit">
                        <TwitterIcon />
                    </IconButton>
                </a>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;