import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessToken, logout } from "../redux/authSlide";
import axiosClient from "../services/axiosClient";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const useAuthAxios = () => {
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use((config) => {
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      else delete config.headers.Authorization;
      return config;
    }, Promise.reject);

    const responseInterceptor = axiosClient.interceptors.response.use((res) => res, async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        dispatch(logout());
        toast.error("Phiên làm việc hết hạn. Vui lòng đăng nhập lại.");
        navigate('/dang-nhap');
        return Promise.reject(error);
      }
      toast.error(error.response?.data?.message || "Có lỗi xảy ra!");
      return Promise.reject(error);
    });

    return () => {
      axiosClient.interceptors.request.eject(requestInterceptor);
      axiosClient.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, dispatch, navigate]);

  return axiosClient;
};