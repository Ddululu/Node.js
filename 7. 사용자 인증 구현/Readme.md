# 7. 사용자 인증 구현

### Lab 설명

JWT(JSON Web Tokens)를 사용하여 사용자 로그인 및 인증 시스템을 구축합니다.

### 목표

- JWT를 사용한 인증 및 권한 부여 이해
- 사용자 로그인 및 토큰 발급 구현

```jsx
// auth-server.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [{ username: 'user1', password: 'password1' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000, () => {
  console.log('Auth server running at <http://localhost:3000>');
});
```