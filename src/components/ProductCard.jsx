import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the global styles

const ProductCard = ({ id, image, name, price }) => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <Card sx={{ maxWidth: 250 }} className="shadow-lg">
            <CardMedia
                component="img"
                height="150"
                image={image}
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price}
                </Typography>
                <Button variant="contained" onClick={handleBuyClick} className="bg-blue-500 hover:bg-blue-700 text-white hover">Comprar</Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;