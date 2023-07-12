import express from 'express';
import { getProduct, getProducts } from './db.js';
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

app.listen(9040, () => {
  console.log('Server is running on port 4000');
});

// // route to get single product (to be changed to get categories)
// app.get('/product/:id', async (req, res) => {
//   const id = req.params.id;
//   const product = await getProduct(id);
//   res.json(product); // Send response as JSON
// });
