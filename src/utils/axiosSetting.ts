import axios, { AxiosResponse } from "axios";

axios.defaults.withCredentials = true;

axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
});
