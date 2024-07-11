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
        <Card sx={{
            maxWidth: 250,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            }
        }}
            className="shadow-lg"
            onClick={handleBuyClick}
        >
            <CardMedia
                component="img"
                height="auto"
                image={image}
                alt="product"
                className='object-cover w-full h-48'
                sx={{ objectFit: 'contain' }}
            />
            <CardContent className='flex flex-col items-center' >
                <Typography gutterBottom variant="h6" component="div" className="text-center" sx={{ marginBottom: 2 }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="text-center" sx={{ marginBottom: 2 }}>
                    {price}
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleBuyClick}
                    sx={{
                        '&:hover': {
                            backgroundColor: '#303f9f'
                        }
                    }}
                    className="text-white">
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;