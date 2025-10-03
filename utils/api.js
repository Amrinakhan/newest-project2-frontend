import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API functions
export const authAPI = {
  // OTP methods
  requestOTP: async (email) => {
    const response = await api.post('/otp/request', { email });
    return response.data;
  },

  verifyOTP: async (email, code, fullName) => {
    const response = await api.post('/otp/verify', { email, code, fullName });
    return response.data;
  },

  // Profile methods
  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },
};

// Social login URLs
export const socialAuthURLs = {
  google: `${API_URL}/auth/google`,
  facebook: `${API_URL}/auth/facebook`,
  apple: `${API_URL}/auth/apple`,
};

export default api;
