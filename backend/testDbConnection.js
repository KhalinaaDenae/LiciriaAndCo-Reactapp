const getConnection = require('./db');

getConnection()
  .then((connection) => {
    connection.query('SELECT 1 + 1 AS result', (error, results) => {
      if (error) {
        console.error('Database query error:', error);
      } else {
        console.log('Database connection successful');
        console.log('Result:', results[0].result);
      }
      connection.release(); // Release the connection back to the pool
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
