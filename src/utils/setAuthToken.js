/* eslint-disable dot-notation */
import axios from 'axios';

export default (token) => {
  let authorization = axios.defaults.headers.common['Authorization'];
  if (token) {
    authorization = token;
    return authorization;
  }
  return delete axios.defaults.headers.common['Authorization'];
};
