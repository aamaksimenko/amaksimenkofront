import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_AXIOS,
  headers: { Authorization: localStorage.getItem('token') },
});

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = localStorage.getItem('token');
    if (token) {
      headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const getNews = async () => {
  const data = await api.get('/news');
  return data;
};

export const regUser = async (payload) => {
  const data = await api.post('/users', { user: payload });
  return data;
};

export const loginUser = async (payload) => {
  const data = await api.post('/users/sign_in', { user: payload });
  return data;
};

export const userData = async () => {
  const data = await api.get('/profile');
  return data;
};

export const addNewsAxios = async (formData) => {
  const data = await api.post('/news', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const editUser = async (payload) => {
  const editUserData = JSON.parse(localStorage.getItem('user'));
  const data = await api.patch(`/users/${Number(editUserData.id)}`, payload);
  return data;
};
