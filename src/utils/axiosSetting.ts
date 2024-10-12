import useLogin from "@/hook/useLogin";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (
    import.meta.env.VITE_DEV_MODE === "prod" &&
    !localStorage.getItem("loginState")
  ) {
    useLogin.getState().changeLoginState(true);
    window.location.href = "/login";
    return Promise.reject({ login: false });
  }
  if (config.method === "get") return config;
  return config;
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axiosInstance;
