import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '' as string | null,
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
      const savedToken = localStorage.getItem('access_token')
      if (savedToken) this.token = savedToken
    },
  }
})
