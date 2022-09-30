import {  Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import React from 'react';
import { Link } from "react-router-dom";


interface Props {
    product: Product;

}
export default function ProductCard({product}: Props){
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx:{fontWeight: 'bold', color: 'primary.main'}
                }}
            />
          <CardMedia
            sx={{height:280, backgroundSize: 'contained', bgcolor:'primary.light'}}
            image={product.pictureUrl}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom color="secondary" variant="h5">
              {(product.price/100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.brand} / {product.type}
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add to cart
          </Button>
          <Button component={Link} to={`/catalog/${product.id}`} size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    )
}