import { defineStore } from 'pinia'
import api from '@/lib/axios.ts'
import type { User } from '@/interfaces/user.ts'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') as string | null,
    bearerToken: '' as string,
    user: null as User|null,
    error: null as string | null,
    loading: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getBearerToken: (state) => state.bearerToken
  },

  actions: {
    async login(email: string, password: string): Promise<boolean> {
      this.loading = true
      this.error = null
      try {
        const response = await api.post('/api/login', { email, password })
        this.token = response.data.token
        this.user = response.data.user
        this.bearerToken = `Bearer ${this.token}`
        localStorage.setItem('token', response.data.token)

        // Facultatif : récupérer les infos utilisateur après login
        // const userRes = await axios.get('/api/me')
        // this.user = userRes.data

        return true
      } catch {
        this.error = 'Email ou mot de passe invalide'
        return false
      } finally {
        this.loading = false
      }
    },

    logout(user: User) {
      try {
        const response = api.post('/api/logout', {
          user_id: user.id
        })
        console.log(response)
      } catch (err) {
        console.error(err)
      } finally {
        this.token = null
        this.user = null
        this.bearerToken = ''
        localStorage.removeItem('token')
        delete api.defaults.headers.common['Authorization']
      }

    },

    // Facultatif : récupérer l'utilisateur connecté au démarrage
    async fetchUser() {
      if (!this.token) return
      try {
        const res = await api.get('/api/me')
        this.user = res.data
      } catch {
        //logout
      }
    }
  }
})
