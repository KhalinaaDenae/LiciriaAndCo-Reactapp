import express from 'express';
import { getCategory, getProduct, getProducts } from './db.js';
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

app.listen(1090, () => {
  console.log('Server is running on port 4000');
});

// Route to get products by category
app.get('/products/:category', async (req, res) => {
  const category = req.params.category;

  try {
    const products = await getCategory(category);

    if (products.length === 0) {
      res.status(404).json({ error: 'No products found for the specified category' });
    } else {
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get a single product by ID
app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await getProduct(id);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Route to get all products
app.get('/products', async (req, res) => {
  const products = await getProducts();
  res.json(products);
});
