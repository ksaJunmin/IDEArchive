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
  async updatePoints(point) {
    const res = await axios.patch('http://localhost:3000/users/points', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ point })
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  }
}
