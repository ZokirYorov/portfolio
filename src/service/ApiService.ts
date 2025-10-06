
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
  }
}

export default ApiServices;
