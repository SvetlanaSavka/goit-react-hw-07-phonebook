import axios from 'axios';
import { BASE_URL } from 'constants';

const contactApi = axios.create({
  baseURL: BASE_URL,
});

export default contactApi;
