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
  /*
  async updateLike(postId, like) {
    const res = await fetch('http://localhost:3000/posts/' + postId + '/like', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ like })
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  }
  */

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

