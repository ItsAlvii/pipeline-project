const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/', (req, res) => {
  res.send('Backend root');
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
