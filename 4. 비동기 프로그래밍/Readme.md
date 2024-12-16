# 4. 비동기 프로그래밍

### Lab 설명

콜백, 프로미스, async/await를 사용하여 비동기 작업을 처리하는 방법을 실습합니다.

### 목표

- Node.js의 비동기 프로그래밍 패턴 이해
- 콜백, 프로미스, async/await 사용법 익히기

```jsx
// async-programming.js

// 콜백 사용
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback('Data fetched with callback');
  }, 1000);
}

fetchDataCallback((data) => {
  console.log(data);
});

// 프로미스 사용
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched with promise');
    }, 1000);
  });
}

fetchDataPromise().then((data) => {
  console.log(data);
});

// async/await 사용
async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log(data);
}

fetchDataAsync();
```