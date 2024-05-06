import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axiosInstance;
