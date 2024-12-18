// node rest-api.js 
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('API server running at <http://localhost:3000>');
});

app.use(express.json());


let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = req.body;
  items[id] = item;
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  items.splice(id, 1);
  res.status(204).send();
});

