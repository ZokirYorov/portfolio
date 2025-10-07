
import axiosInstance from "@/axios";


export const ApiServices = {
  async getDashboard(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/dashboard/')
    return response.data
  },
  async createSponsorList(): Promise<any> {
    const response = await axiosInstance.get(
      'https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/',
    )
    return response.data
  },

  async getInstituteList(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/institute-list/');
    return response.data
  },

  async getPaymentsAll(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/payment-type-list/')
    return response.data
  },

  // async getSponsorStatus(): Promise<any> {
  //   const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-status/');
  //   return response.data
  // },
  async updateSponsor(): Promise<any> {
    const response = await axiosInstance.put('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-update/{id}/');
    return response.data
  },

  async searchSponsor(payload: { query: string }): Promise<any> {
    const response = await axiosInstance.post(
      'https://metsenatclub.xn--h28h.uz/api/v1/search/',
      payload,
    )
    return response.data
  },
  async getAllStudents(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/student-list/')
    return response.data
  },
  async getAllMoneys(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/tariff-list/');
    return response.data
  }

}

export default ApiServices;
