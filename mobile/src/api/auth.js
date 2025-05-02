import axios from 'axios';


const API_BASE_URL = 'http://192.168.18.109:8000/api';


const api = axios.create({
  baseURL: API_BASE_URL,
});

export async function registerUser({ name, email, password }) {
  const response = await api.post('/register/', {
    username: name,
    email:email,
    password:password
  });

  return response.data;
}

export default api;

export async function loginUser({ username, password }) {
  
  const response = await api.post('/token-auth/', {
    username,
    password,
  });

  return response.data;
}

