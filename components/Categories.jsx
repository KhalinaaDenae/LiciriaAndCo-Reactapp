import React from 'react';

const Categories = () => {
    const categoryData = [
      {
        name: 'Earrings',
        image: require('../images/category1.png')
      },
      {
        name: 'Rings',
        image: require('../images/category2.png')
      },
      {
        name: 'Bracelets',
        image: require('../images/category3.png')
      },
      {
        name: 'Anklets',
        image: require('../images/category4.png')
      },
      {
        name: 'Necklaces',
        image: require('../images/category5.png')
      }
    ];
  
    return (
        <section className="categories">
        <div className="categories-container">
            <h1>
                Discover our everyday pieces 
            </h1>
          <div className="category-image-grid">
            {categoryData.map((category, index) => (
              <div className="image-container" key={index}>
                <img src={category.image} alt={`Category ${index + 1}`} />
                <div className="overlay">
                  <h4>{category.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
    );
  };
export default Categories;
