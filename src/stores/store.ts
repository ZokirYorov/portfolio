import { defineStore } from 'pinia'
import type { CreatedStudent, SponsorForm } from '@/models/projectModel.ts'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '' as string | null,
    sponsors: [] as SponsorForm[],
    students: [] as CreatedStudent[],
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('access_token', token)
    },

    clearToken() {
      this.token = ''
      localStorage.removeItem('access_token')
    },

    loadFromStorage() {
      const savedSponsors = localStorage.getItem('sponsors')
      if(savedSponsors) this.sponsors = JSON.parse(savedSponsors)

      const savedToken = localStorage.getItem('access_token')
      if (savedToken) this.token = savedToken

      const savedStudents = localStorage.getItem('students')
      if (savedStudents) this.students = JSON.parse(savedStudents)
    },

    setStudents(students: CreatedStudent[]) {
      this.students = students
      localStorage.setItem('students', JSON.stringify(students))
    },
    addStudent(students: CreatedStudent) {
      this.students.push(students)
      localStorage.setItem('students', JSON.stringify(this.students))
    },

    updateStudents(update: CreatedStudent) {
      const index = this.students.findIndex(student => student.id === update.id)
      if(index !== - 1) {
        this.students[index] = update
        localStorage.setItem('students', JSON.stringify(this.students))
      }
    },

    setSponsors(sponsors: SponsorForm[]) {
      this.sponsors = sponsors
      localStorage.setItem('sponsors', JSON.stringify(sponsors))
    },
    addSponsor(sponsor: SponsorForm) {
      this.sponsors.push(sponsor)
      localStorage.setItem('sponsors', JSON.stringify(this.sponsors))
    }
  }
})
