// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
