// node hello-world.js
const http = require('http'); // Node.js 기본 내장 웹서버 모듈

// HTTP 요청에 대한 응답을 생성하는 서버를 생성한다.
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP 상태 코드 설정 (200 = OK)
  res.setHeader('Content-Type', 'text/plain'); // 응답 헤더 설정
  res.end('Hello World\n'); // 응답 본문 반환
});

// 서버 실행: 포트 3000, 주소 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});