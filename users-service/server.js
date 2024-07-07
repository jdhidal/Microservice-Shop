const express = require('express');
const app = express();
const port = 5001;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Users service running on port ${port}`);
});
