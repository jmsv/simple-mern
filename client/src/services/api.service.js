import axios from 'axios';

/**
 * Instantiate axios instance
 */

const api = axios.create({
    baseURL: '/api'
});

export { api }
