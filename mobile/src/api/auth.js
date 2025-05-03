import axios from 'axios';


const API_BASE_URL = 'http://192.168.18.109:8000/api';


const api = axios.create({
  baseURL: API_BASE_URL,
});



export default api;



