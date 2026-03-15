import axios from 'axios';

const API_BASE = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendContact = async (data) => {
  const response = await api.post('/api/contact', data);
  return response.data;
};

export const checkApiStatus = async () => {
  const response = await api.get('/api/');
  return response.data;
};
