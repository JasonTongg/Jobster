import axios from 'axios';

export const CustomFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

// CustomFetch.interceptors.request.use((config) => {
//     const
// });
