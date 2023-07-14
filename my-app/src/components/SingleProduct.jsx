import React, { useEffect, useState } from "react";
import axios from "axios";
import imageUrls from "../data/imageUrls";
import "./styles/productview.css";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7090/products/${id}`
        );
        const productWithUrl = {
          ...response.data,
          imageUrl: imageUrls[response.data.id],
        };
        setProduct(productWithUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-product">
      <img className="product-image" src={product.imageUrl} alt="product" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};
