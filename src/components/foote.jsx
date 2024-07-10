// Crear un componente de pie de página (Footer) que incluya enlaces de redes sociales

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="h6">Footer</Typography>
                <Button color="inherit">Facebook</Button>
                <Button color="inherit">Instagram</Button>
                <Button color="inherit">Twitter</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;