import axios from 'axios';

const API_URL = 'http://localhost:3000';

export class CommentService {
  async fetchComments(postId) {
    const res = await axios.get(`${API_URL}/comments/${postId}`);
    return res.data;
  }

  async addComment(postId, content, token) {
    const res = await axios.post(`${API_URL}/comments/${postId}`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  }

  async addReply(commentId, content, token) {
    const res = await axios.post(`${API_URL}/comments/${commentId}/reply`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  }
}