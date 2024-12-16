# 2. RESTful API 개발

### Lab 설명

Express.js를 사용하여 기본적인 CRUD 기능을 제공하는 RESTful API를 구축합니다.

### 목표

- Express.js 설치 및 기본 사용법 익히기
- RESTful API의 기본 구조 이해

```jsx
// rest-api.js
const express = require('express');
const app = express();
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

app.listen(3000, () => {
  console.log('API server running at <http://localhost:3000>');
});
```