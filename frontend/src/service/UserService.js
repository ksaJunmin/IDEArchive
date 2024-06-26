import axios from 'axios';

const API = import.meta.env.VITE_API_URL_2

export class UserService {
  async register(userData) {
    try {
      const response = await axios.post(`${API}/signin`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data : error.message);
    }
  }
  async login(email, password) {
    try {
      const response = await axios.post(`${API}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data : error.message);
    }
  }
  async fetchUser(token) {
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const response = await axios.get(API + '/info', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }
  async updatePoints(token, point) {
    try {
      const res = await axios.patch(API + '/points', { point }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return res.data;
    } catch (error) {
      console.error('Error updating user points:', error);
      throw error;
    }
  }
}
