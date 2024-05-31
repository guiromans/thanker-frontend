import axios, { AxiosError } from 'axios';
import { SERVICE_URL } from '../Constants';
import { AuthService } from './AuthService';
import { AuthResponse } from '../model/AuthResponse';
import { enqueueSnackbar } from 'notistack';

const authService: AuthService = new AuthService();

// Create an Axios instance
export const http = axios.create({
  baseURL: SERVICE_URL,
});

http.interceptors.request.use(
  (config) => {
    const token: string | null = authService.getToken();
    config.headers['Access-Control-Allow-Origin'] = '*';
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status && (error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await authService.applyRefreshToken();
        const authResponse: AuthResponse = response.data as AuthResponse;

        authService.saveTokensFrom(authResponse);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${authResponse.token}`;
        return axios(originalRequest);
      } catch (error) {
        const axiosError: AxiosError = error as AxiosError;

        if (axiosError.message.includes("409")) {
          enqueueSnackbar("Your account has been blocked, Contact us for further details", { variant: "error" })
        }

        setTimeout(() => {
          authService.deleteTokens();
          window.location.href = '/';
        }, 1500);
        
      }
    }
    return Promise.reject(error);
  }
);