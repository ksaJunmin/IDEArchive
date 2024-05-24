import axios from 'axios';

export class UserService {
  async fetchUser(token) {
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const response = await axios.get('http://localhost:3000/users/info', {
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
      const res = await axios.patch('http://localhost:3000/users/points', { point }, {
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
