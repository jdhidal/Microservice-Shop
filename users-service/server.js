const express = require('express');
const app = express();
const port = 5001;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Diego Hidalgo' },
  { id: 4, name: 'Kevin Guaña' },
  { id: 5, name: 'Patricio Estrella' },
  { id: 6, name: 'Bob Esponja' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Users service running on port ${port}`);
});
