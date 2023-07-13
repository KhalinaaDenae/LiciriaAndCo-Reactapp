import express from 'express';
import { getCategory, getProducts } from './db.js';
import axios from 'axios';
import cors from 'cors';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

// route to get all products
app.get('/products', async (req, res) => {
  const products = await getProducts();
  res.json(products); // Send response as JSON
});

app.listen(7080, () => {
  console.log('Server is running on port 4000');
});

// // route to get single product (to be changed to get categories)
// Route to get products by category
//app.get('/products/:category', async (req, res) => {
  //const category = req.params.category;
  //const products = await getCategory(category);
  //res.json(products); // Send response as JSON
//});


// Route to get products by category
app.get('/products/:category', async (req, res) => {
  const category = req.params.category;

  try {
    const products = await getCategory(category);

    if (products.length === 0) {
      // If no products found for the category, send a 404 response
      res.status(404).json({ error: 'No products found for the specified category' });
    } else {
      // Send the products as a response
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
