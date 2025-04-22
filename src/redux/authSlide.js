import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../services/RequestAPI.js";

export const signUp = createAsyncThunk("auth/signUp", async ({ fullName, email, password, roleId }, { rejectWithValue }) => {
  try {
    const response = await postRequest("/Auth/sign-up", { fullName, email, password, roleId });
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: "Đăng ký thất bại!" });
  }
});

export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await postRequest("/Auth/sign-in", { email, password });
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: "Đăng nhập thất bại!" });
  }
});

const initialState = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null,
  isRestoring: true, // Thêm trạng thái đang khôi phục
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
    restoreAuth: (state) => {
      const accessToken = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");
      
      if (accessToken && user) {
        state.accessToken = accessToken;
        state.user = JSON.parse(user);
      }
      state.isRestoring = false; // Đánh dấu đã hoàn thành khôi phục
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { data } = action.payload; // data là JWT token
        state.accessToken = data;
        state.user = { email: action.meta.arg.email }; // Lưu email từ form
        state.isLoading = false;

        // Lưu token và thông tin người dùng vào localStorage
        localStorage.setItem("accessToken", data);
        localStorage.setItem("user", JSON.stringify({ email: action.meta.arg.email }));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, restoreAuth } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectIsRestoring = (state) => state.auth.isRestoring; // Selector mới

export default authSlice.reducer;