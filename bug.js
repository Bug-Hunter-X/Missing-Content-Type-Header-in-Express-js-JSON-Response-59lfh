const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Incorrect header for JSON response
  res.send({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});