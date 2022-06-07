import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_GET,
});

export default api;
