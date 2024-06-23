import axios from 'axios';

const API = import.meta.env.VITE_API_URL_5;

export class NotificationService {
  async createNotification(userId, message) {
    const response = await axios.post(API, { userId, message });
    return response.data;
  };

  async getNotifications(token) {
    const response = await axios.get(`${API}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };
}