import React, { useEffect, useState } from 'react';
import './styles/products.css';
import axios from 'axios';
import imageUrls from '../data/imageUrls';

//   <div className='product-categories'>

// {categories.map((category) => <h4> {category}</h4>)}

// </div>

//  const ecommerceProducts = products

//{ecommerceProducts.map((products) => {
  //console.log(products.category)
  //let categories = products.category
 // return categories
//})}

//useEffect(() => {
  //let filteredProducts = categories ;

  // if (category !== "all") {
    //filteredProducts = filteredProducts.filter(product => product.category === category)
  //}
  //setProducts(filteredProducts)
// })
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all")
  const categories = ["necklaces", "earrings", "bracelets"]


  useEffect(() => {
    axios
      .get('http://localhost:2040/products')
      .then((response) => {
        const productsWithUrls = response.data.map((product) => ({
          ...product,
          imageUrl: imageUrls[product.id],
        }));
        setProducts(productsWithUrls);
        console.log(products)
      })
      .catch((error) => console.error(error));
  }, []);


  





  return (
    <div className='shop'>
      <h1 className='header'>Products</h1>
   
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
