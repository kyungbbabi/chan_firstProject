import api from "../index";

export const blogApi = {

  getPosts: (params) => api.get('/api/blog', { params }),
  getPost: (id) => api.get(`/api/blog/${id}`),
  createPost: (data) => api.post('/api/blog', data),
  updatePost: (id, data) => api.put(`/api/blog/${id}`, data),
  deletePost: (id) => api.delete(`/api/blog/${id}`),

  uploadThumbnail: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post(`/api/blog/upload/thumbnail`, formData, {
      headers: {"Content-Type": "multipart/form-data"}
    });
  },

  uploadContentImages: async (files) => {
    const uploadPromises = files.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      return api.post('/api/blog/upload/content', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    });
    try {
      const response = await Promise.all(uploadPromises);
      return response.map(response => response.data.imageUrl);
    } catch (e) {
      throw e;
    }
  }
};