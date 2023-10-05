const express = require('express');
const bodyParser = require('body-parser'); //server module
const app = express();
const port = process.env.PORT || 5000;


// JSON 파싱 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/Login', (req, res) => {
  res.send([

  ])
});

app.listen(port, () => {

});







// 라우터 설정
// const loginRouter = require('./routes/login'); // 예시: 로그인 라우터
// app.use('/api/login', loginRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// // 사용자 데이터베이스 (간단한 예제를 위해 하드 코딩)
// const users = [
//   { id: 1, username: 'user1', password: 'password1' },
//   { id: 2, username: 'user2', password: 'password2' },
// ];

// // JWT 시크릿 키 (보안 상의 이유로 환경 변수로 설정해야 함)
// const secretKey = 'your-secret-key';

// // 사용자 인증 미들웨어
// function authenticateUser(req, res, next) {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username && u.password === password);
//   if (!user) {
//     return res.status(401).json({ message: 'Authentication failed' });
//   }
//   req.user = user;
//   next();
// }

// app.post('/login', authenticateUser, (req, res) => {
//   // 사용자 인증이 성공하면 토큰을 발급
//   const payload = { id: req.user.id, username: req.user.username };
//   const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
//   res.json({ token });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
