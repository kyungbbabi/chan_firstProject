const express = require('express');
const bodyParser = require('body-parser'); //server module
const app = express();
const port = process.env.PORT || 5000;
const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json'); // Firebase 서비스 계정 키 경로


// JSON 파싱 미들웨어 설정
// // 미들웨어 함수 정의
// app.use((req, res, next) => {
//   console.log('미들웨어 1: 요청이 들어옴');
//   next(); // 다음 미들웨어 또는 라우트 핸들러로 요청 전달
// });

// app.use((req, res, next) => {
//   console.log('미들웨어 2: 요청을 처리함');
//   // 응답 보내지 않고 다음 미들웨어로 전달
//   next();
// });

// // 라우트 핸들러
// app.get('/', (req, res) => {
//   console.log('라우트 핸들러: 루트 경로 요청 처리');
//   res.send('안녕, Express!');
// });

// // 서버 시작
// const port = 3000;
// app.listen(port, () => {
//   console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/Login', (req, res) => {
  res.send([

  ])
});

app.listen(port, () => {

});

// // 미들웨어 설정
// app.use(express.json());

// // 라우트 설정
// app.post('/login', (req, res) => {
//   // 로그인 로직을 구현합니다. Firebase와 연동하여 사용자 인증을 처리할 수 있습니다.
//   const { email, password } = req.body;
//   // 사용자 인증 및 토큰 생성 로직을 여기에 추가합니다.
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://your-firebase-project.firebaseio.com',
// });

// // Firebase 인증 설정
// const auth = admin.auth();

// // Firebase 데이터베이스 설정
// const db = admin.firestore();

// // 사용자 로그인 및 Firebase 사용자 생성
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Firebase 사용자 인증
//   try {
//     const user = await auth.getUserByEmail(email);
//     // 사용자가 존재하면 로그인 로직 수행
//     // 이메일 및 비밀번호를 사용하여 사용자 인증을 수행할 수 있습니다.
//   } catch (error) {
//     // 사용자가 존재하지 않음. 회원가입 또는 오류 처리를 수행합니다.
//   }
// });

// // Firebase 데이터베이스 사용 예시
// app.get('/data', async (req, res) => {
//   // Firebase 데이터베이스에서 데이터를 읽거나 쓸 수 있습니다.
//   const dataRef = db.collection('dataCollection').doc('documentId');
//   const snapshot = await dataRef.get();
//   if (snapshot.exists) {
//     const data = snapshot.data();
//     res.json(data);
//   } else {
//     res.status(404).json({ message: 'Data not found' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });







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
