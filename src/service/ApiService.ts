
import axiosInstance from "@/axios";
import type { authLogin, CreatedStudent, SponsorForm } from '@/models/projectModel.ts'
import type { UnwrapRef } from 'vue'


export const ApiServices = {
  async login(admin: authLogin): Promise<any> {
    const response = await axiosInstance.post(
      'https://metsenatclub.xn--h28h.uz/api/v1/auth/login/',
      admin,
    )
    return response.data
  },

  async getDashboard(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/dashboard/')
    return response.data
  },
  async getSponsorList(): Promise<any> {
    const response = await axiosInstance.get(
      'https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/',
    )
    return response.data
  },

  async getAllStudents(): Promise<any[]> {
    const response = await axiosInstance.get(
      'https://metsenatclub.xn--h28h.uz/api/v1/student-list/',
    )
    return response.data
  },

  async getInstituteList(): Promise<any> {
    const response = await axiosInstance.get(
      'https://metsenatclub.xn--h28h.uz/api/v1/institute-list/',
    )
    return response.data
  },

  async getPaymentsAll(): Promise<any> {
    const response = await axiosInstance.get(
      'https://metsenatclub.xn--h28h.uz/api/v1/payment-type-list/',
    )
    return response.data
  },

  async pushSponsorSumma(sponsor: UnwrapRef<SponsorForm>): Promise<any> {
    const response = await axiosInstance.post(
      'https://metsenatclub.xn--h28h.uz/api/v1/sponsor-summa-create/',
      sponsor,
    )
    return response.data
  },

  // async getSponsorStatus(): Promise<any> {
  //   const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-status/');
  //   return response.data
  // },

  async updateSponsor(): Promise<any> {
    const response = await axiosInstance.put(
      'https://metsenatclub.xn--h28h.uz/api/v1/sponsor-update/{id}/',
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
  async createdStudent(item: CreatedStudent): Promise<any> {
    const response = await axiosInstance.post(
      `https://metsenatclub.xn--h28h.uz/api/v1/student-create/`,
      item,
    )
    return response.data
  },
  async getAllMoneys(): Promise<any> {
    const response = await axiosInstance.get('https://metsenatclub.xn--h28h.uz/api/v1/tariff-list/')
    return response.data
  },
}

export default ApiServices;
