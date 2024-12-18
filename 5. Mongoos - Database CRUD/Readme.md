# 5. MongoDB를 이용한 데이터 CRUD
### 테스트
- Mongo DB Atlas에서 가이드에 따라 클러스터 및 계정 생성
- 터미널(bash, cmd, powershell) 실행
- `npm install mongodb mongoose`
- `node database.js <username> <password>`
### 결과
```jsx
Connected to MongoDB Atlas
Item saved: {
  name: 'Apple',
  price: 1.5,
  _id: new ObjectId('67627045bb92c015b62eb93b'),
  __v: 0
}
All items: [
  {
    _id: new ObjectId('67627045bb92c015b62eb93b'),
    name: 'Apple',
    price: 1.5,
    __v: 0
  }
]
All items deleted
```