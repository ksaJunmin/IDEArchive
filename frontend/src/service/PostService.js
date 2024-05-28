import axios from 'axios';

const API = import.meta.env.VITE_API_URL_1


export class PostService {
  async getPosts() {
    const res = await axios.get(API);
    return res.data;
  }

  async getPostById (postId) {
    const res = await axios.get(`${API}/${postId}`);
    return res.data;
  }

  async addPost(formData, token) {
    try {
      const response = await axios.post(`${API}/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data : error.message);
    }
  }

  async updateLike(token, postId) {
    const res = await axios.patch(`${API}/${postId}/like`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }

  
}

