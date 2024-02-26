import {setupInterceptorsTo} from './Interceptors';
import {baseURL, headers} from './config';
import axios from 'axios';

export const apiClient = setupInterceptorsTo(
  axios.create({
    baseURL,
    headers,
  }),
);
