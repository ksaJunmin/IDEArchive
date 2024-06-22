import axios from 'axios';

const API = import.meta.env.VITE_API_URL_5;

export const createNotification = async (userId, message) => {
  const response = await axios.post(API, { userId, message });
  return response.data;
};

export const getNotifications = async (userId) => {
  const response = await axios.get(`${API}/${userId}`);
  return response.data;
};