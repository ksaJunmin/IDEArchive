import axios from 'axios';

const API = import.meta.env.VITE_API_URL_4

export class RequestService {
  // 의뢰 게시물 목록 가져오기
  async getRequests() {
    try {
      const response = await axios.get(API);
      return response.data;
    } catch (error) {
      throw Error(`API Error: ${error.response.statusText}`);
    }
  }

  // 특정 의뢰 게시물 가져오기
  async getRequestById(requestId) {
    try {
      const response = await axios.get(`${API}/${requestId}`);
      return response.data;
    } catch (error) {
      throw Error(`API Error: ${error.response.statusText}`);
    }
  }

  // 의뢰 게시물 작성
  async postRequest(requestData, token) {
    try {
      const response = await axios.post(API, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw Error(`API Error: ${error.response.statusText}`);
    }
  }

  async fetchAnswers(requestId) {
    const response = await axios.get(`${API}/${requestId}/answers`);
    return response.data;
  }
  // 답변 추가
  async addAnswer(requestId, answerData, token) {
    try {
      const response = await axios.post(API + `/${requestId}/answers`, answerData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw Error(`API Error: ${error.response.statusText}`);
    }
  }

  // 채택된 답변 업데이트
  async chooseAnswer(requestId, answerId) {
    try {
      const response = await axios.patch(`${API}/${requestId}/choose-answer/${answerId}`);
      return response.data;
    } catch (error) {
      throw Error(`API Error: ${error.response.statusText}`);
    }
  }

  async updateLike(token, requestId) {
    const res = await axios.patch(`${API}/${requestId}/like`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }
};
