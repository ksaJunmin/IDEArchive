export class PostService {
  async getPosts() {
    const res = await fetch('http://localhost:3000/posts');
    const d = await res.json();
    return d;
  }
  async getPostById(postId) {
    const res = await fetch('http://localhost:3000/posts/' + postId);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  }
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
}
