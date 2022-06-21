import axios from "axios";
import config from "../config/index";

const instance = axios.create({
  baseURL: config.requestUrl,
  timeout: 5 * 60 * 1000
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    const { code, data } = response.data
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (code === 1000) {

      return data;
    } else {
      throw('请求报错')
    }
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const factory = ({ method, url, params = {}, data = {}, hideLoading }) => {
  return instance.request({
    url,
    method,
    headers: {},
    data,
    params,
    hideLoading
  });
};

export const get = ({ url, params, hideLoading = false }) => {
  return factory({
    url,
    method: "get",
    params,
    hideLoading
  });
};

export const post = ({ url, params, data, hideLoading = false }) => {
  return factory({
    url,
    method: "post",
    params,
    data,
    hideLoading
  });
};

export const put = ({ url, params, data, hideLoading = false }) => {
  return factory({
    url,
    method: "put",
    params,
    data,
    hideLoading
  });
};

export const del = ({ url, params, data, hideLoading = false }) => {
  return factory({
    url,
    method: "delete",
    params,
    data,
    hideLoading
  });
};