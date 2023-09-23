// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/api/login', (req, res) => {
//   // 클라이언트로부터 이메일과 비밀번호를 받아옵니다.
//   const { email, password } = req.body;

//   // 이메일과 비밀번호를 검증하는 로직을 구현합니다.
//   if (email === 'user@example.com' && password === 'password') {
//     // 검증이 성공하면 액세스 토큰을 생성합니다.
//     const accessToken = generateAccessToken();

//     // 액세스 토큰을 클라이언트에게 반환합니다.
//     res.json({ accessToken });
//   } else {
//     // 검증이 실패한 경우 에러 메시지를 반환합니다.
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// // 액세스 토큰을 생성하는 함수입니다.
// function generateAccessToken() {
//   // 액세스 토큰 생성 로직을 구현합니다.
//   // 예를 들어, jsonwebtoken 패키지를 사용하여 토큰을 생성할 수 있습니다.
//   // 자세한 사용법은 해당 패키지의 문서를 참조하세요.
// }

// // 서버를 시작합니다.
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });