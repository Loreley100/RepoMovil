import axios from 'axios';
import { API_URL } from '@env'; 

const api = axios.create({
  baseURL: API_URL='https://reqres.in/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;