// node async-programming.js
function fetchDataCallback(callback) {
  console.log("콜백함수 내부");
  setTimeout(() => {
    callback('콜백함수 응답: Data fetched with callback');
    }, 1000);
}

function fetchDataPromise() {
  console.log("프로미스 내부");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('프로미스 응답: Data fetched with promise');
    }, 1000);
  });
}
  
async function fetchDataAsync() {
  console.log("비동기 함수 내부");
  const data = await fetchDataPromise(); 
  console.log("Await 응답: "+data);
}

console.log("콜백함수 호출");
fetchDataCallback((data) => {
  console.log(data);
});

console.log("프로미스 호출");
fetchDataPromise().then((data) => {
  console.log(data);
});

console.log("Async 호출");
fetchDataAsync();