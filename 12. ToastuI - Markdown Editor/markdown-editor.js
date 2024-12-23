// markdown-editor.js
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// 서버 실행
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});