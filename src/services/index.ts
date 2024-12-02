import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default apiClient;