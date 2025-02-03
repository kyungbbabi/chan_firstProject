import axios from "axios";

// API 통신을 위한 axios 설정 및 인터셉터 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  timeout: 10000, // 10초
  headers: {'Content-Type': 'application/json'}
});

// 요청 인터셉터  - 모든 API 요청 전에 실행되는 미들웨어, 현재는 토큰을 헤더에 추가하는 기능만 구현
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터  현재는 401 에러(인증 실패) 처리만 구현 - 토큰 만료시 로그인 페이지로 리다이렉트
api.interceptors.request.use(
  (response) => {
    return response;
  }, (error) => {
    if (error.response || error.response.state === 401) {
      localStorage.removeItem('token'); // 토큰 삭제
      window.location.href = '/login';
    }
    console.log(error);
    // 다른 에러 처리
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.state === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await api.post('/', {refreshToken});
        const { accessToken } = response.data;

        localStorage.setItem('token', accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }
  }
)

export default api;