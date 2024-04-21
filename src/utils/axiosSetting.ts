import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "localhost:3000",
  timeout: 3000,
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axiosInstance;
