import api from './api';

export const register = async (appPassword: string, email: string, password: string) => {
  const response = await api.post('/auth/register', { appPassword, email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};
