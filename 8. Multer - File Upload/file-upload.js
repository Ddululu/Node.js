// file-upload.js (파일 업로드 서버)

const express = require('express');
const multer = require('multer');

// 1. 파일 저장 위치 및 이름 설정
const upload = multer({
  dest: 'uploads/', // 파일 저장 경로
});

const app = express();

// 2. 단일 파일 업로드 엔드포인트
app.post(
  '/upload', 
  upload.single('file'), // 단일 파일 업로드 처리 (file은 Request에 포함해야 할 필드 명)
  (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded'); // 파일이 없을 경우
    }

    console.log('Uploaded file info:', req.file); // 서버 콘솔에 파일 정보 출력

    // 업로드된 파일 정보를 JSON 응답에 포함
    res.json({
      message: 'File uploaded successfully',
      file: { // req.file은 object 타입이라 응답에 담기 위해서는 매핑이 필요. 즉, 까야된다.
        originalName: req.file.originalname,
        fileName: req.file.filename,
        mimeType: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
      },
    });
  }
);

// 3. 서버 실행
app.listen(3000, () => {
  console.log('File upload server running at http://localhost:3000');
});
