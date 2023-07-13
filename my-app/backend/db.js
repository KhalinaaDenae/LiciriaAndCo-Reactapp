import mysql from 'mysql2';

// create connection to DB
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'your_database_name',
}).promise();

// get all products
export async function getProducts() {
  const [rows] = await pool.query(`SELECT * FROM products`);
  return rows;
}

// get single product
export async function getProduct(category) {
  const [rows] = await pool.query('SELECT * FROM products WHERE category = ?', [category]);
  return rows;
}
