import React from 'react';
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";



export default function Catalog(){
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json() )
      .then(data => setProducts(data))
  }, [])

  // add a product to the list of products
  function addProduct(){
    setProducts( prevState => [...prevState, 
        {
         id: prevState.length + 101,
         name:'product'+(prevState.length +1),
         price: (prevState.length * 100) +100,
         brand: 'some brand',
         description: 'some description',
         pictureUrl: 'http://picsum.photos/200'
        }])
  }
    return (
     <>
       <ProductList products ={products} />
    </>
    )
}