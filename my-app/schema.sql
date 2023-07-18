
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

