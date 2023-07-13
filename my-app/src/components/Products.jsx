import React, { useEffect, useState } from 'react';
import './styles/products.css';
import axios from 'axios';
import imageUrls from '../data/imageUrls';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const categories = ['all', 'necklaces', 'earrings', 'bracelets'];

  const getProducts = async (category) => {
    try {
      const response = await axios.get(`http://localhost:7080/products/${category}`);
      const productsWithUrls = response.data.map((product) => ({
        ...product,
        imageUrl: imageUrls[product.id],
      }));
      return productsWithUrls;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const productsWithUrls = await getProducts(categoryFilter);
      setProducts(productsWithUrls);
    };

    fetchData();
  }, [categoryFilter]);

  return (
    <div className='shop'>
      <h1 className='header'>Products</h1>
      <div className='product-categories'>
        {categories.map((category) => (
          <h4 key={category} onClick={() => setCategoryFilter(category)}>
            {category}
          </h4>
        ))}
      </div>
      <div className='product-list'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img className='product-image' src={product.imageUrl} alt='product' />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-description'>{product.description}</p>
            <p className='product-price'>${product.price}</p>
            <button className='add-to-bag-button'>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};
