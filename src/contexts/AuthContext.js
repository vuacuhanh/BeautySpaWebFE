import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreAuth, logout as reduxLogout, selectCurrentUser } from "../redux/authSlice";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const reduxUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);

  const login = (userData, accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    dispatch(reduxLogout());
  };

  return (
    <AuthContext.Provider value={{ user: reduxUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};