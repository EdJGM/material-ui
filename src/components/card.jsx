// Crear un componente de tarjeta de producto (ProductCard) que muestre información de un producto(imagen, nombre, precio, botón de compra).

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = () => {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                height="350"
                image="https://img.freepik.com/foto-gratis/cuaderno-gafas-cerca-computadora-portatil-taza_23-2147768815.jpg?t=st=1720443279~exp=1720446879~hmac=cadee6e1344e5246c82ec64ad900e6465409b031b80f369d249886dd82df56c3&w=740"
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Laptpo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $999.99
                </Typography>
                <Button variant="contained">Buy</Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
