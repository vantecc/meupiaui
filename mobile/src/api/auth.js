import axios from 'axios';


const API_BASE_URL = 'https://meupiaui.duckdns.org/api';


const api = axios.create({
  baseURL: API_BASE_URL,
});



export default api;



