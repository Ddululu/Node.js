// node Rest-API & File-System.js
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

/* 
#######################################################################
            데이터 입출력을 JSON 형식의 파일로 관리하기
*/
const FILE_PATH = './data.json'; // 입,출력 데이터를 로컬의 data.json 파일로 관리

// 파일에 데이터를 JSON 형식으로 저장하는 함수
const writeData = (data) => {
  // 파일을 동기적으로 쓰는 함수 (입력한건 모두 처리해야 됨)
  fs.writeFileSync( 
    FILE_PATH, 
    JSON.stringify(data, null, 2), // JSON 형식의 String으로 변환환
     'utf8'); 
};

// 파일에서 JSON 형식의 데이터를 읽는 함수
const readData = () => {
  try {
    // 파일을 동기적으로 읽는 함수 (출력할건 모두 가져와야 됨)
    const data = fs.readFileSync(FILE_PATH, 'utf8'); 

    return JSON.parse(data); // JSON 형식의 문자열을 JSON 객체로 변환
  } catch (err) {
    return []; // 파일이 없거나 오류가 나면 빈 배열 반환
  }
};
// ##################################################################


/* ##################################################################
              REST API를 이용해 JSON 파일에 CRUD
*/
// GET 요청: 전체 데이터 조회
app.get('/items', (req, res) => {
  const items = readData(); // 파일에서 데이터 읽기
  res.json(items);
});

// POST 요청: 새로운 항목 추가 (id 자동 증가)
app.post('/items', (req, res) => {
  const items = readData(); // JSON 객체로부터 데이터를 가져오기 (파일 읽기)
  const newItem = req.body;

  // ID에 Auto Increment 부여하기
  const newId = items.length > 0 
    ? Math.max(...items.map(item => item.id)) + 1 // Json에 저장된 id 중 가장 큰 수 + 1
    : 1; // 아니면 그냥 1
  newItem.id = newId;

  items.push(newItem); // JSON 객체에 데이터 추가하기
  writeData(items); // JSON 파일에 변경된 객체 반영하기(파일에 쓰기)
  res.status(201).json(newItem); // 생성된 항목 반환
});

// PUT 요청: 특정 ID로 항목 수정
app.put('/items/:id', (req, res) => {
  const items = readData();
  const id = parseInt(req.params.id, 10);
  const updatedItem = req.body;

  // 항목 찾기
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  updatedItem.id = id; // ID는 수정되지 않도록 보장
  items[index] = updatedItem; // 데이터 수정
  writeData(items); // 파일에 저장
  res.json(updatedItem);
});

// DELETE 요청: 특정 ID로 항목 삭제
app.delete('/items/:id', (req, res) => {
  const items = readData();
  const id = parseInt(req.params.id, 10); // URL에서 ID 가져오기

  // 항목 찾기
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items.splice(index, 1); // 항목 삭제
  writeData(items); // 파일에 저장
  res.status(204).send(); // 성공, 반환할 내용 없음
});
// ################################################################

app.listen(3000, () => {
  console.log('API server running at <http://localhost:3000>');
});

