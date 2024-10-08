const express = require('express');
const app = express();
const port = 9999;

app.use(express.json());

const database = require('./database.json');

app.post('/login', (req, res) => {
  const { username } = req.body;
  const user = database.users.find((user) => user.username === username);
  if (user) {
    const accessToken = user.accessToken;
    const refreshToken = user.refreshToken;
    res.json({ accessToken, refreshToken });
  } else {
    res.status(401).json({ error: 'Invalid username' });
  }
});

app.post('/refreshToken', (req, res) => {
  const { refreshToken } = req.body;
  const user = database.users.find((user) => user.refreshToken === refreshToken);
  if (user) {
    const accessToken = user.accessToken;
    res.json({ accessToken });
  } else {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

app.post('/logout', (req, res) => {
  const { accessToken } = req.body;
  // Xoá access token
  res.json({ message: 'Logged out successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});