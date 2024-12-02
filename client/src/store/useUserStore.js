import { create } from "zustand";
import axios from "../lib/axios.js";
import { handleApiError } from "../lib/errorhandler.js";

import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async (name, email, password, password_confirmation) => {
    set({ loading: true });

    console.log(name, email, password, password_confirmation);

    if (password !== password_confirmation) {
      set({ loading: false });
      return toast.error("Password do not match.");
    }

    try {
      const res = await axios.post("/users", {
        name,
        email,
        password,
        password_confirmation,
      });

      set({ user: res.data, loading: false });

      toast.success("Signup successful login now");
      return window.location.replace("/auth/login");

    } catch (error) {
      set({ loading: false });
      const { message, statusCode } = handleApiError(error);
      toast(message);
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/users/login", { email, password });
      set({ user: res.data.User, loading: false });

      toast.success("Login successful");

      return window.location.replace("/");
    } catch (error) {
      set({ loading: false });
      const { message, statusCode } = handleApiError(error);

      toast.error(message);
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const res = await axios.get("/users/me");
      set({ user: res.data.user, checkingAuth: false });
    } catch (error) {
      set({ checkingAuth: false, user: null });
      const { message, statusCode } = handleApiError(error);
    }
  },

  logout: async () => {
    try {
      await axios.post("/users/logout");
      set({ user: null });
      window.location.replace("/auth/login");
    } catch (error) {
     return null
    }
  },

  refreshToken: async () => {
    if (get().checkAuth) return;
    set({ checkingAuth: true });
    try {
      const res = axios.post("/users/refresh");
      set({ checkingAuth: false });
      return res.data;
    } catch (error) {
      set({ user: null, checkingAuth: false });
      throw error;
    }
  },
}));

let refreshPromise = null;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if (refreshPromise) {
          await refreshPromise;
          return axios(originalRequest);
        }

        refreshPromise = useUserStore.getState().refreshToken();
        await refreshPromise;
        refreshPromise = null;

        return axios(originalRequest);
      } catch (refreshError) {
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
