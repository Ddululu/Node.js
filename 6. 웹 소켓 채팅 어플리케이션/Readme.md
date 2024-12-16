# 6. 웹 소켓 채팅 애플리케이션

### Lab 설명

Socket.io를 사용하여 실시간 채팅 애플리케이션을 개발합니다.

### 목표

- 실시간 통신을 위한 웹 소켓 이해
- Socket.io를 사용한 클라이언트-서버 통신 구현

```jsx
// chat-server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Chat server running at <http://localhost:3000>');
});
```