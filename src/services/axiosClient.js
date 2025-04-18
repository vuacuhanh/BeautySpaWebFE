import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:7293/api",
  timeout: 30000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.accept = "*/*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;