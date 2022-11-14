import axios from 'axios';
import {GetLocalStorage} from './LocalStorage';

const CustomFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

CustomFetch.interceptors.request.use(
  (config) => {
    const user = GetLocalStorage();
    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default CustomFetch;
