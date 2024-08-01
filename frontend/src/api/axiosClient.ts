import axios from 'axios';
import store from '../store';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

apiClient.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
