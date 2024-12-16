// node rest-api.js 
const express = require('express');
const app = express(); // express 서버의 CRUD 메서드를 사용하기 위해 객체를 app에 저장.
app.use(express.json()); // express에서 수신하는 타입을 JSON으로? Post 할때 body를 json 구조로 안보내면 "is not valid JSON" 반환

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = req.body; //{}
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

app.listen(3000, () => {
  console.log('API server running at <http://localhost:3000>');
});