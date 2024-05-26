import axios from 'axios';

const API = import.meta.env.API_URL

export class PostService {
  async getPosts() {
    console.log(API)
    const res = await axios.get(API_URL + '/posts');
    return res.data;
  }

  async getPostById(postId) {
    const res = await axios.get(API + '/posts/' + postId);
    return res.data;
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

