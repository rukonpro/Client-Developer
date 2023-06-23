import axios from "axios";



export const API = 'http://localhost:5000/api/v1/developer';

export const token = `Bearer ${localStorage.getItem('developerAccessToken')}`;
const Axios = axios.create({
    baseURL: `${API}`,
    // timeout: 1000,
    headers: { Authorization: token }
});

export default Axios;