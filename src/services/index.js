import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://gateway.scan-interfax.ru/api/v1/',
  });

export default axiosInstance
