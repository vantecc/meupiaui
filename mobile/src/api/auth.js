import axios from 'axios';


const API_BASE_URL = 'http://10.19.14.4:8000/api';


const api = axios.create({
  baseURL: API_BASE_URL,
});



export default api;



