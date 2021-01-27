import Vue from 'vue';
import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
const baseURL = process.env.NODE_ENV === 'development' ? '/' : '/qingzang/';
const baseConfig = {
  // baseURL: '/api',
  baseURL,
  timeout: 60 * 1000,
};

const _axios = axios.create(baseConfig);

_axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      'Basic Y29udHJvbFRvd2VyOiFAIyRESEpLSWN2ZWRzZnM=';

    return config;
  },
  (error) => Promise.reject(error)
);

_axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error) =>
    // Message.error(error.response);
    Promise.reject(error)
);

Plugin.install = function axiosFunc(vue, options) {
  vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
