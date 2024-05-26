import axios from 'axios';

const API = import.meta.env.VITE_API_URL

export class PostService {
  async getPosts() {
    console.log(API);
    const res = await axios.get(API + '/posts');
    return res.data;
  }

  async getPostById(postId) {
    const res = await axios.get(API + '/posts/' + postId);
    return res.data;
  }

  async addPost(newPost, token) {
    try {
      const response = await axios.post(`${API}/posts/add`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data : error.message);
    }
  }

  async updateLike(token, postId) {
    const res = await axios.patch(API + '/posts/' + postId + '/like', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }

  
}

