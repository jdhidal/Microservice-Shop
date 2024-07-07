const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5002;

app.use(bodyParser.json());

const users = {
  john: 'password123',
  jane: 'mypassword'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.json({ message: 'Login successful' });
  } else {
    res.json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Login service running on port ${port}`);
});
