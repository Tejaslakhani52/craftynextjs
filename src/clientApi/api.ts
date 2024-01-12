import axios, { AxiosResponse } from "axios";
import { decryptData } from "../aes-crypto";
import { DashboardDataType } from "../interface/dashboard";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_NEXT_API_BASE_URL}`;

const api = {
  getIp: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/get/ip`);
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getCountryCode: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/get/getCountryCode`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getUserData: async (): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.post(
        `${API_BASE_URL}/user/getData`
      );
      const decryptedData = JSON.parse(decryptData(response.data));
      return decryptedData;
    } catch (error) {
      throw error;
    }
  },

  createUser: async (payload: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/create`, payload);
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (userData: any): Promise<void> => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name || "");
      formData.append("updateDp", userData.updateDp || "");
      formData.append("file", userData.photo_uri || "");

      const response: any = await axios.post(
        `${API_BASE_URL}/user/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response;
    } catch (error) {
      console.error("Error updating user data:", error);
      throw error;
    }
  },

  getCurrentPlan: async (): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.post(
        `${API_BASE_URL}/user/account/currentPlan`
      );
      const decryptedData = JSON.parse(decryptData(response?.data));
      const jsonString = decryptedData.substring(
        decryptedData.indexOf("{"),
        decryptedData.lastIndexOf("}") + 1
      );
      const currentPlanData = JSON.parse(jsonString);
      return currentPlanData;
    } catch (error) {
      throw error;
    }
  },

  getCategoryData: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/category/getData`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getDashboardData: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/dashboard/getData`);
      const res: DashboardDataType = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getSingleTemplate: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/get/getSingleTemplate`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getKeywordData: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/special/getKeywordData`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  searchTemplate: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/search/templates`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getDraftData: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/draft/getData`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  draftAction: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/draft/action`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getUploadData: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/upload/getData`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  uploadAction: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/upload/action`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  getPlanData: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/plans/getData`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  razorpay: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/payment/razorPay`);
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  stripe: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/payment/stripe`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  webhook: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/payment/webhook`);
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  cardList: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/payment/list`);
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  detach: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/payment/detach`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  updateCard: async (payload: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/payment/update`,
        payload
      );
      const res = JSON.parse(decryptData(response?.data));
      return res;
    } catch (error) {
      throw error;
    }
  },

  removeBackground: async (payload: any): Promise<Blob> => {
    try {
      const formData = new FormData();
      formData.append("file", payload.image);

      const response: AxiosResponse<Blob> = await axios.post(
        `${API_BASE_URL}/tools/bgRemove`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
