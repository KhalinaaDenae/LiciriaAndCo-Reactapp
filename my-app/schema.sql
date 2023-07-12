
USE your_database_name ;

CREATE TABLE products (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price integer NOT NULL,
  image_url VARCHAR(255),
  category TEXT NOT NULL
);

INSERT INTO products (name, description, price,category, image_url)
VALUES 
('necklace', 'gold chain', '500', 'necklace',  );

UPDATE products SET image_url = '../images/product1.png' WHERE id = 1;
UPDATE products SET image_url = 'https://example.com/image2.jpg' WHERE id = 2;
UPDATE products SET image_url = 'https://example.com/image1.jpg' WHERE id = 3;
UPDATE products SET image_url = 'https://example.com/image2.jpg' WHERE id = 4;

UPDATE products SET image_url = 'https://example.com/image1.jpg' WHERE id = 5;
UPDATE products SET image_url = 'https://example.com/image2.jpg' WHERE id = 6;

UPDATE products SET image_url = 'https://example.com/image1.jpg' WHERE id = 7;
UPDATE products SET image_url = 'https://example.com/image2.jpg' WHERE id = 8;

UPDATE products SET image_url = 'https://example.com/image1.jpg' WHERE id = 9;
UPDATE products SET image_url = 'https://example.com/image2.jpg' WHERE id = 10;

UPDATE products SET image_url = 'https://example.com/image1.jpg' WHERE id = 11;
UPDATE products SET image_url = 'https://example.com/image2.jpg' WHERE id = 12;

