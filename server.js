// server.js
const express = require('express');
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//HOLA MATIAS
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});