import axios from 'axios';

export class PostService {
  async getPosts() {
    const res = await axios.get('http://localhost:3000/posts');
    return res.data;
  }

  async getPostById(postId) {
    const res = await axios.get('http://localhost:3000/posts/' + postId);
    return res.data;
  }

  async updateLike(token, postId) {
    const res = await axios.patch('http://localhost:3000/posts/' + postId + '/like', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }

  
}

