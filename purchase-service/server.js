const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5003;

app.use(bodyParser.json());

const users = {
  john: { id: 1, balance: 10 },
  jane: { id: 2, balance: 50 }
};

const ITEM = 'book';

app.post('/purchase', (req, res) => {
  const { username } = req.body;

  if (!users[username]) {
    return res.json({ message: 'User not found' });
  }

  if (users[username] && users[username].balance >= 10) {
    users[username].balance -= 10;
    res.json({ message: 'Purchase successful', item: ITEM });
  } else {
    res.json({ message: 'Insufficient balance of ' +username+
        " has an insufficient balance of " + users[username].balance + " to buy a ", item: ITEM});
  }
});

app.listen(port, () => {
  console.log(`Purchase service running on port ${port}`);
});
