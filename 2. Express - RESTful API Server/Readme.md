# 2. RESTful API 개발

### 테스트

- 터미널(bash, cmd, powershell) 실행
- `npm install express`
- `node rest-api.js`
- Postman이나 Thunder Client(vscode), HTTP Client(InteliJ) 등을 이용해 HTTP 요청 보내기

  - GET `http://localhost:3000/items`
  - POST `http://localhost:3000/items`
    - body (json): { "id": "1234" }
  - PUT `http://localhost:3000/items/<index>`
    - body (json): { "id": "4321" }
  - DELETE `http://localhost:3000/items/<index>`
### 결과
  ![GET](./image/GET-items.png)
  ![POST](./image/POST-items.png)
  ![PUT](./image/PUT-items.png)
  ![DELETE](./image/DELETE-items.png)