# 8. 파일 업로드 기능

### Lab 설명

Multer 미들웨어를 사용하여 서버에 파일을 업로드하는 기능을 구현합니다.

### 목표

- 파일 업로드를 위한 Multer 사용법 이해
- 서버에서 파일 저장 및 관리 구현

```jsx
// file-upload.js
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('File upload server running at <http://localhost:3000>');
});
```