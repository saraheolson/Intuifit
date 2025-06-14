import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Create a function to get an authenticated API instance
export const useAuthenticatedApi = () => {
  const { getToken } = useAuth();
  
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  // Add request interceptor to include auth token
  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    console.log('API Request:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
      token: token ? token.substring(0, 20) + '...' : 'No token'
    });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Add response interceptor for error handling
  api.interceptors.response.use(
    (response) => {
      console.log('API Response:', {
        url: response.config.url,
        status: response.status,
        data: response.data
      });
      return response;
    },
    (error) => {
      console.error('API Error:', {
        url: error.config?.url,
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      return Promise.reject(error);
    }
  );

  return api;
}; 