import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <AppBar position="static" className="app-bar">
            <Toolbar>
                <Link to="/" className="text-white">
                    <Typography variant="h6">Home</Typography>
                </Link>
                <Button color="inherit">Acerca de</Button>
                <Button color="inherit">Contacto</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

