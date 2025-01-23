import api from "../index";

export const userAuth = {
  login: (credentials) => api.post('/auth/login', credentials),  // 로그인 API: credentials(이메일, 비밀번호) 전송
  register: (data) => api.post('/auth/register', data),  // 회원가입 API: 사용자 정보 전송
  checkEmail: (email) => api.post('/auth/check-email', { email }), // 이메일 중복 체크
  sendEmailCode: (email) => api.post('/auth/send-code', { email }), // 이메일 인증 코드 발송
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }), // 비밀번호 찾기
  googleLogin: (tokenId) => api.post('/auth/google', { tokenId }), // 구글 로그인
  logout: () => api.post('/auth/logout'), // 로그아웃
};