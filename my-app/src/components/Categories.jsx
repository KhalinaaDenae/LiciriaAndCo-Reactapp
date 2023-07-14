import React from "react";

const Categories = () => {
  const categoryData = [
    {
      name: "Earrings",
      image: require("../images/category1.png"),
    },
    {
      name: "Rings",
      image: require("../images/category2.png"),
    },
    {
      name: "Bracelets",
      image: require("../images/category3.png"),
    },
    {
      name: "Necklaces",
      image: require("../images/category5.png"),
    },
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <h6 className="mute"> Get ready to sparkle</h6>
        <h1 className="categories-header">Discover our collections</h1>
        <div className="category-image-grid">
          {categoryData.map((category, index) => (
            <div className="image-container" key={index}>
              <img src={category.image} alt={`Category ${index + 1}`} />
              <div className="overlay">
                <h4> Shop Now </h4>
              </div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
