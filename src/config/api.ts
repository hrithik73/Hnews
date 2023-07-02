import axios from 'axios';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export const api = axios.create({
  baseURL: BASE_URL,
});
