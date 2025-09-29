import axios, { AxiosResponse } from "axios";
import { constant } from "./constant";

const { path } = constant;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class DataService {
  constructor() {
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use((response: AxiosResponse) => {
      const cookies = (response.headers as Record<string, string | string[]>)["set-cookie"];
      if (cookies) {
        const cookieArray = Array.isArray(cookies) ? cookies : typeof cookies === "string" ? [cookies] : [];
        cookieArray.forEach((cookie) => {
          const [cookieName, cookieValue] = cookie.split(";")[0].split("=");
          document.cookie = `${cookieName.trim()}=${cookieValue.trim()}; path=/;`;
        });
      }
      return response;
    });
  }

  private setAuthHeader() {
    const authDetail = localStorage.getItem("authorization");
    if (authDetail) {
      const token = JSON.parse(authDetail).token;
      axios.defaults.headers.common["Authorization"] = token;
    }
  }

  async post<T>(body: unknown, url: string): Promise<ApiResponse<T>> {
    this.setAuthHeader();
    const response: AxiosResponse<ApiResponse<T>> = await axios.post(url, body);
    return response.data;
  }

  async get<T>(params: unknown, url: string): Promise<ApiResponse<T>> {
    this.setAuthHeader();
    const response: AxiosResponse<ApiResponse<T>> = await axios.get(url, { params });
    return response.data;
  }

  async delete<T>(body: unknown, url: string): Promise<ApiResponse<T>> {
    this.setAuthHeader();
    const response: AxiosResponse<ApiResponse<T>> = await axios.delete(url, { data: body });
    return response.data;
  }
}

export default new DataService();
