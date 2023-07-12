import React, { useEffect, useState } from 'react';
import './styles/products.css';
import axios from 'axios';
import imageUrls from '../data/imageUrls';


export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9040/products')
      .then((response) => {
        const productsWithUrls = response.data.map((product) => ({
          ...product,
          imageUrl: imageUrls[product.id],
        }));
        setProducts(productsWithUrls);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='shop'>
      <h1>Products</h1>
      <div className='product-list'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img className='product-image' src={product.imageUrl} alt='product' />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-description'>{product.description}</p>
            <p className='product-price'>${product.price}</p>
            <button className='add-to-bag-button'> View Details </button>
          </div>
        ))}
      </div>
    </div>
  );
};
