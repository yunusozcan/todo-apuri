import axios from 'axios';
import config from '../configs/config.json';

const apiClient = axios.create({
    baseURL: config.apiUrl + config.apiEndpoint + config.version,
});

//todo auth

export { apiClient };
