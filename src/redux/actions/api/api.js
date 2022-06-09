import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_AXIOS,
// });

const api = axios.create({
  baseURL: 'http://127.0.0.1:3001',
});

export default api;
