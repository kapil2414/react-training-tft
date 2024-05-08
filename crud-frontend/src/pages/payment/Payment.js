import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';
import axios from 'axios';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const buyNow = async () => {
        let response = await axios.post(
            'http://localhost:5000/payment',
            { name: name, price: price }
        )
        if (response && response.status === 200) {
            console.log(response.data)
            window.location.href = response.data.session.url
        }
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: INR{price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={buyNow} variant="contained" color="primary">
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
};

const ProductPage = () => {
    const product = {
        name: 'Sample Product',
        price: '200',
        imageUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ProductCard product={product} />
        </div>
    );
};

export default ProductPage;
