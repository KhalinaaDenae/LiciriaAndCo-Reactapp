// const express = require('express');
// const router = express.Router();
// const pool = require('./db');

// router.get('/products', (req, res) => {
//     const sql = 'SELECT * FROM products';
  
//     pool.query(sql, (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   });
  