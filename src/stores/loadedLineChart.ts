
import { defineStore } from 'pinia'

interface MonthlyData {
  month: string
  sponsors: number
  students: number
}

interface LoadedDataState {
  monthlyStats: MonthlyData[]
  isLoading: boolean
}

export const useLoadedDataStore = defineStore('loadedDataStore', {
  state: (): LoadedDataState => ({
    monthlyStats: [],
    isLoading: false,
  }),

  actions: {
    async loadMonthlyStats() {
      this.isLoading = true
      try {
        // API chaqiruv misoli:
        // const res = await axiosInstance.get('/api/v1/dashboard/monthly/')
        // this.monthlyStats = res.data

        // ⚙️ Demo ma’lumot (agar API hozircha yo‘q bo‘lsa):
        const months = [
          'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
          'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
        ]
        this.monthlyStats = months.map(month => ({
          month,
          sponsors: Math.floor(Math.random() * 1500 + 200),
          students: Math.floor(Math.random() * 1500 + 200),
        }))
      } catch (err) {
        console.error('Statistikani yuklashda xatolik:', err)
      } finally {
        this.isLoading = false
      }
    },
  },
})
