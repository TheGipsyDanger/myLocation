import axios from 'axios';
import { API_URL } from '~/configs';

export const API = axios.create({
  baseURL: API_URL,
});
