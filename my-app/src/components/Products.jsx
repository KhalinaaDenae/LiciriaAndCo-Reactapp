import React, { useEffect, useState } from "react";
import "./styles/products.css";
import axios from "axios";
import imageUrls from "../data/imageUrls";
import { Link } from "react-router-dom";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const categories = ["necklace", "earring", "bracelet", "all"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7080/products");
        const productsWithUrls = response.data.map((product) => ({
          ...product,
          imageUrl: imageUrls[product.id],
        }));
        setProducts(productsWithUrls);
        setInitialProducts(productsWithUrls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filterCategory = async (category) => {
    if (category === "all") {
      setProducts(initialProducts);
    }

    try {
      const response = await axios.get(
        `http://localhost:7080/products/${category}`,
        { params: { category } }
      );
      const filteredProductsWithUrls = response.data.map((product) => ({
        ...product,
        imageUrl: imageUrls[product.id],
      }));
      setProducts(filteredProductsWithUrls);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryClick = (category) => {
    //setSelectedCategory(category);
    filterCategory(category);
  };

  return (
    <div className="shop">
      <h1 className="header">Products</h1>
      <div className="product-categories">
        {categories.map((category) => (
          <h4 key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </h4>
        ))}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              className="product-image"
              src={product.imageUrl}
              alt="product"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <Link style={{ textDecoration: "none" }} to="/ProductView">
              {" "}
              <button className="add-to-bag-button"> View Details </button>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// products .sort
