# 5. 데이터베이스 연동

### Lab 설명

MongoDB와 Mongoose를 사용하여 Node.js 애플리케이션과 데이터베이스를 연동합니다.

### 목표

- MongoDB와 Mongoose 설치 및 기본 사용법 익히기
- 데이터베이스와의 기본 CRUD 연동 이해

```jsx
// database.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Item = mongoose.model('Item', itemSchema);

async function run() {
  const newItem = new Item({ name: 'Apple', price: 1.5 });
  await newItem.save();
  console.log('Item saved:', newItem);

  const items = await Item.find();
  console.log('All items:', items);

  await Item.deleteMany();
  console.log('All items deleted');
}

run().catch(err => console.error(err));
```