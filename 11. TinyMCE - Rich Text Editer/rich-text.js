const express = require('express');
const path = require('path');

const app = express();

// 정적 파일 제공 (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // public 폴더 하위의 파일들을 정적 컨텐츠로 제공

// 서버 실행
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});