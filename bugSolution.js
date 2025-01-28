const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Correct header for JSON response
  res.setHeader('Content-Type', 'application/json');
  res.send({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});