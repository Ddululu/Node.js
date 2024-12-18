// node database.js <username> <password>
const mongoose = require('mongoose');

// 1. 실행 시 입력받은 username과 password
// - process.argv는 node 실행 시 인수를 배열에 저장.
const [username, password] = process.argv.slice(2);

// 2. 입력 검증
if (!username || !password) {
  console.error('Error: Please provide MongoDB username and password.');
  console.log('Usage: node database.js <username> <password>');
  process.exit(1);
  
}

// 3. MongoDB Atlas 연결 URI
const uri = `mongodb+srv://${username}:${password}@cluster0.msc9a.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`;

// 4. MongoDB 연결 설정
mongoose.connect(uri, { 
  useNewUrlParser: true, // 최신 MongoDB 파서 사용
  useUnifiedTopology: true  // 최신 서버 탐지 엔진 사용
});
// 4-2. MongoDB 연결 검증
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err); // 연결 실패 시 에러 출력
});
db.once('open', () => { 
  console.log('Connected to MongoDB Atlas'); // 연결에 성공하면 출력
});

// 5. 데이터 스키마 정의
const itemSchema = new mongoose.Schema({
  name: String,  // 문자열 필드
  price: Number //숫자 필드
});
// 6. mongo DB에 저장할 모델 생성
const Item = mongoose.model('Item', itemSchema);

// 7. CRUD 작업 실행
async function run() {
  const newItem = new Item({ name: 'Apple', price: 1.5 }); // 모델에 값을 대입한 객체 생성
  await newItem.save(); // 객체를 DB에 저장
  console.log('Item saved:', newItem);

  const items = await Item.find();
  console.log('All items:', items);

  await Item.deleteMany();
  console.log('All items deleted');
}

run().catch(err => console.error(err));