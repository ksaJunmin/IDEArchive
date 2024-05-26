import axios from 'axios';

const API = import.meta.env.VITE_API_URL_3

export class CommentService {
  async fetchComments(postId) {
    const res = await axios.get(`${API}/${postId}`);
    return res.data;
  }

  async addComment(postId, content, token) {
    const res = await axios.post(`${API}/${postId}`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  }

  async addReply(commentId, content, token) {
    const res = await axios.post(`${API}/${commentId}/reply`, { content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  }
}