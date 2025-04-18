import axiosClient from "./axiosClient";

const api = axiosClient;

export const getRequest = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error in getRequest:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

export const patchRequest = async (url, data) => {
  try {
    const response = await api.patch(url, data);
    return response.data;
  } catch (error) {
    console.error("Error in patchRequest:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

export const deleteRequest = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error("Error in deleteRequest:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

export const postRequest = async (url, data, config = {}) => {
    try {
      const response = await axiosClient.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("Error in postRequest:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw error;
    }
  };

export const putRequest = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error("Error in putRequest:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};