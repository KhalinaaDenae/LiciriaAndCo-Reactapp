import React, { useEffect, useState } from "react";
import "./styles/products.css";
import axios from "axios";
import imageUrls from "../data/imageUrls";
import { Link, useNavigate } from "react-router-dom";
import { SingleProduct } from "./SingleProduct";
import SocialMedia from "./BestSellersProductPage";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("all");
  const categories = ["Necklace", "Earring", "Bracelet", "all"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1090/products");
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
        `http://localhost:1090/products/${category}`,
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
    filterCategory(category);
  };

  const handleSingleDetailsClick = (id) => {
    navigate(`/products/${id}`); // Redirect to SingleProductView component
  };

  return (
    <div className="product-section">
      <SocialMedia />
      <div className="shop">
        <div className="product-categories">
          <h5 className="filter-type">
            {" "}
            Filter By <br />
            Category{" "}
          </h5>
          {categories.map((category) => (
            <ul>
              <li
                className="category-item"
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            </ul>
          ))}
          <h5 className="filter-type"> Sort By Price </h5>
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
              <button
                className="add-to-bag-button"
                onClick={() => handleSingleDetailsClick(product.id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// products .sort
