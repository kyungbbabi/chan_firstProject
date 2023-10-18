const express = require('express');
const bodyParser = require('body-parser'); //server module
const app = express();
const port = process.env.PORT || 5000;
const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json'); // Firebase 서비스 계정 키 경로

// .env 파일 로드
dotenv.config();

// 미들웨어 설정
app.use((req, res, next) => {
  // .env 파일에서 필요한 정보 추출
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;
  
    // 클라이언트로 정보 전송
    res.json({ apiKey, apiSecret });
  });



// JSON 파싱 미들웨어 설정
// 미들웨어 함수 정의, 미들웨어 설정
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('미들웨어 1: 요청이 들어옴');
  next(); // 다음 미들웨어 또는 라우트 핸들러로 요청 전달
});

app.use((req, res, next) => {
  console.log('미들웨어 2: 요청을 처리함');
  // 응답 보내지 않고 다음 미들웨어로 전달
  next();
});

// 라우트 핸들러
app.get('/api/Login', (req, res) => {
  console.log('라우트 핸들러: 루트 경로 요청 처리');
  res.send('안녕, Express!');
  res.send([

  ])
});

// 라우트 설정
app.post('/login', (req, res) => {
  // 로그인 로직을 구현합니다. Firebase와 연동하여 사용자 인증을 처리할 수 있습니다.
  const { email, password } = req.body;
  // 사용자 인증 및 토큰 생성 로직을 여기에 추가합니다.
});



// admin.initializeApp 함수는 Firebase Admin SDK를 사용하여 Firebase 프로젝트를 초기화하는 데 사용됩니다. 이 코드는 서버 측 애플리케이션에서 Firebase 서비스를 사용할 때 주로 필요합니다.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), //이 코드를 사용하면 서버 애플리케이션에서 Firebase 기능을 사용할 수 있으며, 이를 통해 데이터베이스 접근, 사용자 인증 및 다른 Firebase 기능을 활용할 수 있게 됩니다.
  databaseURL: 'https://your-firebase-project.firebaseio.com', //Firebase 실시간 데이터베이스의 URL을 제공합니다.
});

// Firebase 인증 설정
const auth = admin.auth();

// Firebase 데이터베이스 설정
const db = admin.firestore();

// 사용자 로그인 및 Firebase 사용자 생성
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Firebase 사용자 인증
  try {
    const user = await auth.getUserByEmail(email);
    // 사용자가 존재하면 로그인 로직 수행
    // 이메일 및 비밀번호를 사용하여 사용자 인증을 수행할 수 있습니다.
  } catch (error) {
    // 사용자가 존재하지 않음. 회원가입 또는 오류 처리를 수행합니다.
  }
});

// Firebase 데이터베이스 사용 예시
app.get('/data', async (req, res) => {
  // Firebase 데이터베이스에서 데이터를 읽거나 쓸 수 있습니다.
  const dataRef = db.collection('dataCollection').doc('documentId');
  const snapshot = await dataRef.get();
  if (snapshot.exists) {
    const data = snapshot.data();
    res.json(data);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});







// 라우터 설정
const loginRouter = require('./routes/login'); // 예시: 로그인 라우터
app.use('/api/login', loginRouter);



// 사용자 데이터베이스 (간단한 예제를 위해 하드 코딩)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// JWT 시크릿 키 (보안 상의 이유로 환경 변수로 설정해야 함)
const secretKey = 'your-secret-key';

// 사용자 인증 미들웨어
function authenticateUser(req, res, next) {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  req.user = user;
  next();
}

app.post('/login', authenticateUser, (req, res) => {
  // 사용자 인증이 성공하면 토큰을 발급
  const payload = { id: req.user.id, username: req.user.username };
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// 서버 시작, 한번만 실행되면 됌
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});