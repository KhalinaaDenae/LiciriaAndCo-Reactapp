import React from "react";
import { Link, link, useParams } from "react-router-dom";
import axios from "axios";
import imageUrls from "../data/imageUrls";
import React, { useEffect, useState } from "react";
const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:7080/products/${id}`, {
        params: { category },
      });
      const filteredProductsWithUrls = response.data.map((product) => ({
        ...product,
        imageUrl: imageUrls[product.id],
      }));
      setProducts(filteredProductsWithUrls);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);

export const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <div className="single-product">
      <h4> {productId}</h4>
      <h1> prducct details </h1>
      <Link to="/products"> Back to products </Link>
    </div>
  );
};
