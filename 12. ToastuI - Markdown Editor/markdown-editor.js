const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.json());

// 샘플 데이터
const sampleData = {
  postid: "1734631299633",
  author: "user1",
  title: "테스트 ",
  content: [
    {
      html: `<h1>이건 제목 1입니다.</h1>
<h2>이건 제목 2입니다.</h2>
<h3>이건 제목 3입니다.</h3>
<p>이건 <strong>굵은 글씨</strong>입니다. 이건 <em>기울임꼴</em>입니다. 이건 <span style="text-decoration: underline;">밑줄</span>입니다. 이건 <s>취소선</s>입니다.</p>
<p>이건 <span style="color: rgb(224, 62, 45);">빨간 텍스트 컬러</span>입니다. 이건 <span style="background-color: rgb(224, 62, 45);">빨간 글자 배경색</span>입니다.&nbsp;</p>
<p style="text-align: right;">이건 우측 정렬입니다</p>
<p style="text-align: center;">이건 가운데 정렬입니다.</p>
<p style="text-align: left;">이건 <br>줄바꿈입니다.</p>
<p>&nbsp;</p>`,
    },
  ],
};

// API: 샘플 데이터 반환
app.get('/post/:id', (req, res) => {
  const postId = req.params.id;

  if (postId !== sampleData.postid) {
    return res.status(404).send('Post not found');
  }

  res.json(sampleData);
});

// API: 게시글 저장
app.post('/submit', (req, res) => {
  const { content, title } = req.body;
  console.log('Received Content:', content);
  console.log('Title:', title);
  res.send('게시 완료');
});

// 서버 실행
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});