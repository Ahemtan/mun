import { create } from "zustand";
import axios from "../lib/axios.js";
import { handleApiError } from "../lib/errorhandler.js";

import { toast } from "react-hot-toast";

export const useFormStore = create((set, get) => ({

  form: null,
  loading: false,

  createForm: async (name, email, phone) => {
    set({ loading: true });

    try {
      const res = await axios.post("/form", {
        name,
        email,
        phone,
      });

      set({ form: res.data.form, loading: false });
      toast.success(res.data.message);
    } catch (error) {
      set({ loading: false });
      const { message } = handleApiError(error);
      toast(message);
    }
  },

  getForm: async () => {
    try {
      const res = await axios.get("/form");
      set({ form: res.data.form });
    } catch (error) {
      throw error
    }
  }

}));