import axios from 'axios';


const API_BASE_URL = 'http://3.149.255.174:8000//api';


const api = axios.create({
  baseURL: API_BASE_URL,
});



export default api;



