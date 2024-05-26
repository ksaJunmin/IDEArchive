import axios from 'axios';

const API = import.meta.env.VITE_API_URL

export class CommentService {
  async fetchComments(postId) {
    const res = await axios.get(`${API}/comments/${postId}`);
    return res.data;
  }

  async addComment(postId, content, token) {
    const res = await axios.post(`${API}/comments/${postId}`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  }

  async addReply(commentId, content, token) {
    const res = await axios.post(`${API}/comments/${commentId}/reply`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  }
}