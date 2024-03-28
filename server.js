const express = require('express');
const bodyParser = require('body-parser'); //server module
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json'); // Firebase 서비스 계정 키 경로
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

// .env 파일 로드
dotenv.config();

// JSON 파싱 미들웨어 설정
// 미들웨어 함수 정의, 미들웨어 설정
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 미들웨어 추가
app.use(cors());
app.use(bodyParser.json());


// 미들웨어 설정
app.use((req, res, next) => {
  // .env 파일에서 필요한 정보 추출
  const clientId = process.env.REACT_APP_CLIENT_ID

  // 클라이언트로 정보 전송
  res.json({ clientId });
});





app.use((req, res, next) => {
  console.log('미들웨어 1: 요청이 들어옴');
  next(); // 다음 미들웨어 또는 라우트 핸들러로 요청 전달
});

app.use((req, res, next) => {
  console.log('미들웨어 2: 요청을 처리함');
  // 응답 보내지 않고 다음 미들웨어로 전달
  next();
});



 



// 라우터 설정
const loginRouter = require('./routes/login'); // 예시: 로그인 라우터
// JWT 시크릿 키 (보안 상의 이유로 환경 변수로 설정해야 함)
const secretKey = 'your-secret-key';


app.use('/api/login', loginRouter);



// 사용자 데이터베이스 (간단한 예제를 위해 하드 코딩)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// 라우트 핸들러
app.get('/api/Login', (req, res) => {
  console.log('라우트 핸들러: 루트 경로 요청 처리');
  res.send('안녕, Express!');
  res.send([
    // 아직 로직은 구현되어 있지 않습니다.
  ])
});




// 사용자 인증 미들웨어
// req: HTTP요청 객체, res: HTTP응답 객체, next:미들웨어 체인에서 다음 미들웨어 또는 라우트 핸들러로 요청을 전달하는 콜백 함수
//이 미들웨어 함수는 주어진 사용자 이름(username)과 비밀번호(password)와 일치하는 사용자를 찾는 단순한 예시. 실제로는 사용자 인증 로직이 훨씬 복잡하며, 토큰 기반의 인증이나 외부 인증 공급자(예: Firebase)를 사용하는 것이 일반적입니다.
function authenticateUser(req, res, next) {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password); //클라이언트가 제출한 username, password와 일치하는 사용자를 users 배열에서 찾습니다. 이 배열은 사용자 데이터베이스를 나타냅니다.
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  } //인증실패
  req.user = user; //사용자를 찾았을 경우, 이 사용자 객체를 req 객체에 추가하여 이후 라우트 핸들러에서 이 사용자에 대한 접근 권한을 부여합니다.
  next(); //이 미들웨어 함수가 성공적으로 완료되면 next() 함수를 호출하여 요청을 다음 미들웨어 함수나 라우트 핸들러로 전달합니다.
}

app.post('/login', authenticateUser, (req, res) => {
  // 사용자 인증이 성공하면 토큰을 발급
  const payload = { id: req.user.id, username: req.user.username };
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  res.json({ token });
});




const admin = require('firebase-admin');
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});




const express = require('express');
const router = express.Router();

// 예시: 글 목록을 가져오는 API 엔드포인트
router.get('/posts', async (req, res) => {
  try {
    // Firebase에서 글 목록을 가져오는 코드
    const posts = await admin.firestore().collection('posts').get();
    const postsData = posts.docs.map((doc) => doc.data());
    res.json(postsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 라우터를 Express 앱에 추가
app.use('/api', router);




// 글 작성 API 엔드포인트
router.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Firestore에 데이터 추가
    const docRef = await admin.firestore().collection('posts').add({
      title,
      content,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.json({ id: docRef.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// React 앱에서 API 호출 예시
const fetchPosts = async () => {
  try {
    const response = await fetch('http://localhost:your-port/api/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};









// Firebase 인증 설정
const auth = admin.auth();

// Firebase 데이터베이스 설정
const db = admin.firestore();


// 라우트 핸들러
// 사용자 로그인 및 Firebase 사용자 생성
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Firebase 사용자 인증
  try {
    // 사용자가 존재하면 로그인 로직 수행
    // 이메일 및 비밀번호를 사용하여 사용자 인증을 수행할 수 있습니다.
    const user = await auth.signInWithEmailAndPassword(email, password);
    // const user = await auth.getUserByEmail(email);
    // 사용자 인증이 성공하면 토큰을 발급
    const token = await user.user.getIdToken();
    
    // 토큰을 클라이언트에게 전송
    res.json({ token });
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ message: 'Authentication failed' });
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


// 서버 시작, 한번만 실행되면 됌
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
