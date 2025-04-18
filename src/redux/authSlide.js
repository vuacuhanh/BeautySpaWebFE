import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../services/RequestAPI.js"; // Đường dẫn đến file RequestAPI.js

// Thunk để gọi API đăng nhập
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await postRequest("/api/Auth/sign-in", { email, password });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Đăng nhập thất bại!" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
    role: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { accessToken, refreshToken, userLogin } = action.payload.data;
        state.user = userLogin;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.role = userLogin?.roles?.[0] || null;
        state.isLoading = false;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userLogin));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const { logout } = authSlice.actions;
export default authSlice.reducer;