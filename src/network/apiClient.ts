import {baseURL, headers} from './config';
import axios from 'axios';
import {setupInterceptorsTo} from './interceptors';

export const apiClient = setupInterceptorsTo(
  axios.create({
    baseURL,
    headers,
  }),
);
