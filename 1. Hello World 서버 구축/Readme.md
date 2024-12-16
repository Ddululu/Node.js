# 1. Hello World 서버 구축
### Lab 설명

Node.js로 간단한 HTTP 서버를 생성하여 "Hello World" 메시지를 반환하는 예제입니다.

### 목표

- Node.js 환경 설정 및 기본 서버 구축 방법 이해
- HTTP 모듈 사용법 익히기

```jsx
// hello-world.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at <http://127.0.0.1:3000/>');
});
```