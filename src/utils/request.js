import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const request = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: true,
});

export const initRequestInterceptor = (req) => {
  req.headers = {
    ...(req.headers || {}),
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken') || ''}`,
  };

  return req;
};

const refreshToken = async () => {
  const refreshTokenAPI = axios.create({
    baseURL,
    withCredentials: true,
  });

  refreshTokenAPI.interceptors.request.use(initRequestInterceptor);

  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const {data} = await refreshTokenAPI.post('/users/auth/token/', {
      refresh_token: refreshToken,
    });

    const {access_token: accessToken, refresh_token: newRefreshToken} = data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    return accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

const initResponseInterceptor = () => {
  return [
    (response) => response,
    async (error) => {
      const config = error?.config;
      const errorCode = error?.response?.data?.error?.code;

      if (errorCode === 'TOKEN_EXPIRED' && !config._attempted) {
        config._attempted = true;

        try {
          const newAccessToken = await refreshToken(baseURL);
          config.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(config);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
          window.location.href = '/login';
        }
      }
      return Promise.reject(error);
    },
  ];
};

request.interceptors.request.use(initRequestInterceptor);
request.interceptors.response.use(...initResponseInterceptor());

export const httpClient = request;
