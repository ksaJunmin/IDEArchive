export class PostService {
  /*
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
  */
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

  async updateLike(postId, userId, like) {
    // 좋아요 업데이트 로직
    const post = await this.getPostById(postId);
    const likedBy = post.likedBy || [];
    const isLiked = likedBy.includes(userId);

    if (isLiked) {
      // 유저가 이미 좋아요를 누른 경우, 좋아요 취소
      post.likedBy = likedBy.filter(_id => _id !== userId);
      post.like -= 1;
    } else {
      // 유저가 좋아요를 누르지 않은 경우, 좋아요 추가
      post.likedBy.push(userId);
      post.like += 1;
    }

    // 게시글 업데이트 API 요청
    const response = await fetch('http://localhost:3000/posts/' + postId +'/like', {
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

