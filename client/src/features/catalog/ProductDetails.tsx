import { Divider, Grid, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Product } from "../../app/models/product";

export default function ProductDetails(){
     // use useParams to the id of the specific product id 
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

   useEffect (() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
         .then(response => setProduct(response.data))
         .catch(err => console.log(err))
         .finally(()=> setLoading(false))
   }, [id] )

   if(loading) return <h3>Loading...</h3>

   if(!product) return <h3>Product not found</h3>


    return (
       <Grid container spacing={6}>
          <Grid item xs={6}>
            <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}} />
          </Grid>

            <Grid item xs={6}>
            <Typography>
              {product.name}
            </Typography>
            <Divider sx={{mb: 2}} />
            <Typography variant='h4' color='secondary'> ${(product.price / 100).toFixed(2)}</Typography>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>{product.type}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Brand</TableCell>
                        <TableCell>{product.brand}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Quantity</TableCell>
                        <TableCell>{product.quantityInStock}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </Grid>
       </Grid>
    )
}