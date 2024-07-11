// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a202c', // Color principal
        },
        secondary: {
            main: '#2d3748', // Color secundario
        },
        error: {
            main: '#f44336', // Color de error
        },
        background: {
            default: '#f5f5f5', // Color de fondo
        },
        hover: {
            main: '#ff0000', // Color de hover
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;