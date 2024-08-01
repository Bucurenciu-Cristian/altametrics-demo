import apiClient from './axiosClient';
import { loginSchema } from '../validation/authSchema';

export const login = async (email: string, password: string) => {
  const parsedData = loginSchema.parse({ email, password });
  const response = await apiClient.post('/auth/login', parsedData);
  return response.data;
};
