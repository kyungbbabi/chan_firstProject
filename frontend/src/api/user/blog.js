import api from "../index";

export const blogApi = {

  getPosts: (params) => api.get('/api/blog', { params }),
  getPost: (id) => api.get(`/api/blog/${id}`),
  createPost: (data) => api.post('/api/blog', data),
  updatePost: (id, data) => api.put(`/api/blog/${id}`, data),
  deletePost: (id) => api.delete(`/api/blog/${id}`)

};