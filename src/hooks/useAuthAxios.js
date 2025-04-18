import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessToken, selectRefreshToken, logout } from "../redux/authSlice";
import axiosClient from "../services/axiosClient";
import { toast } from "react-toastify";

let isRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (token) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

export const useAuthAxios = () => {
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        } else {
          delete config.headers.Authorization;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response) {
          const { status, data } = error.response;

          if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (!refreshToken) {
              dispatch(logout());
              toast.error("Phiên làm việc đã hết hạn, vui lòng đăng nhập lại.");
              window.location.href = "/login";
              return Promise.reject(error);
            }

            if (!isRefreshing) {
              isRefreshing = true;
              try {
                const response = await axiosClient.post("/refresh-token", { refreshToken });
                const { accessToken: newAccessToken } = response.data;

                localStorage.setItem("accessToken", newAccessToken);
                onRefreshed(newAccessToken);
                isRefreshing = false;
              } catch (refreshError) {
                dispatch(logout());
                toast.error("Phiên làm việc đã hết hạn, vui lòng đăng nhập lại.");
                window.location.href = "/login";
                return Promise.reject(refreshError);
              }
            }

            return new Promise((resolve) => {
              refreshSubscribers.push((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                resolve(axiosClient(originalRequest));
              });
            });
          }

          toast.error(data.message || "Đã xảy ra lỗi!");
        } else if (error.request) {
          toast.error("Không nhận được phản hồi từ máy chủ!");
        } else {
          toast.error("Lỗi khi gửi yêu cầu!");
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosClient.interceptors.request.eject(requestInterceptor);
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshToken, dispatch]);

  return axiosClient;
};