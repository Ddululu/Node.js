// auth-server.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [{ username: 'user1', password: 'password1' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000, () => {
  console.log('Auth server running at <http://localhost:3000>');
});