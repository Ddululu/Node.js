# 3. 파일 시스템 모듈 사용

### Lab 설명

Node.js의 `fs` 모듈을 사용하여 파일 읽기, 쓰기, 삭제 등의 작업을 수행합니다.

### 목표

- Node.js의 파일 시스템 모듈 사용법 익히기
- 비동기 파일 처리 이해

```jsx
// file-system.js
const fs = require('fs');

// 파일 쓰기
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully');

  // 파일 읽기
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // 파일 삭제
    fs.unlink('example.txt', (err) => {
      if (err) throw err;
      console.log('File deleted');
    });
  });
});
```