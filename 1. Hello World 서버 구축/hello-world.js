// node hello-world.js
const http = require('http'); // 현재는 사용되지 않지만, 서버로 동작하는 기본 패키지

const server = http.createServer((req, res) => {
  // 단순히 req가 들어오면 res를 반환하는 서버를 생성
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at <http://127.0.0.1:3000/>');
});