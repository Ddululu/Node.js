// async-programming.js

// 콜백 함수 구성
function fetchDataCallback(callback) {
    console.log("콜백함수 시작");
    // setTimeout: 비동기 타이머 (1초 후에 콜백 함수 실행)
    setTimeout(() => {
      callback('Data fetched with callback'); // 콜백 함수에 데이터 전달
    }, 1000);
  }
  
  // 콜백 함수 호출
  fetchDataCallback((data) => {
    console.log("콜백함수 응답"); // 콜백이 호출되면 실행
    console.log(data); // 콜백 함수로부터 전달받은 데이터 출력
  });
  
  // 프로미스 함수 구성
  function fetchDataPromise() {
    console.log("프로미스 시작");
    // Promise 객체 반환: 비동기 작업이 완료되면 resolve 호출
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched with promise'); // 작업 완료 시 resolve로 데이터 전달
      }, 1000);
    });
  }
  
  // 프로미스 함수 호출 및 응답 처리
  fetchDataPromise().then((data) => {
    console.log("프로미스 응답 함수"); // 프로미스가 성공(resolve)하면 실행
    console.log(data); // resolve에서 전달된 데이터 출력
  });
  
  // async/await로 프로미스 함수 호출
  async function fetchDataAsync() {
    console.log("비동기 함수 시작");
    // await: fetchDataPromise 함수가 완료될 때까지 기다림
    const data = await fetchDataPromise(); 
    console.log("비동기 처리 완료"); // await가 끝난 후 실행
    console.log(data); // 결과 데이터 출력
  }
  
  // async 함수 호출
  fetchDataAsync();
  