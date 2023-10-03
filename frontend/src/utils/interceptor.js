import axios from 'axios';

export const baseUrl ='http://localhost:6000/api';

// axios interceptor
export const interceptor = (providedURL) => {
  axios.defaults.baseURL = providedURL || baseUrl;
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};
