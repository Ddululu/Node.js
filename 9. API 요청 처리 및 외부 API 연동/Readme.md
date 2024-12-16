# 9. API 요청 처리 및 외부 API 연동

### Lab 설명

Axios를 사용하여 외부 API와 통신하는 방법을 실습합니다.

### 목표

- 외부 API와의 통신 이해
- Axios를 사용한 HTTP 요청 및 응답 처리

```jsx
// api-request.js
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('<https://api.example.com/data>');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```