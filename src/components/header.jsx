// Update the import statements to use @mui/material instead of @material-ui/core

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Header</Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

