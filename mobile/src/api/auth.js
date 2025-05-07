import axios from 'axios';


const API_BASE_URL = 'http://192.168.0.2:8000/api';


const api = axios.create({
  baseURL: API_BASE_URL,
});



export default api;



