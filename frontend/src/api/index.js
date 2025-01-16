import axios from "axios";

// API 통신을 위한 axios 설정 및 인터셉터 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  timeout: 10000, // 10초
  headers: {'Content-Type': 'application/json'}
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.request.use(
  (response) => {
    return response;
  }, (error) => {
    if (error.response || error.response.state === 401) {
      localStorage.removeItem('token'); // 토큰 삭제
      window.location.href = '/login';
    }
    // 다른 에러 처리
    return Promise.reject(error);
  }
);

export default api;