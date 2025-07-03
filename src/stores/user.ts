import { defineStore } from 'pinia'

interface User {
  id: string,
  email: string,
  name: string,
  remember_token: string,
  created_at: string,
  updated_at: string,
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // for data that is not yet loaded
      userToken: '',
      userId: '',
      userBearerToken: '',
      user: null as User|null,
    }
  },
  getters: {
    getUserId(): string {
      return this.userId
    },
    getBearerToken(): string {
      return this.userBearerToken
    },
    getUser(): User|null {
      return this.user
    }
  },
  actions: {
    setToken(token: string) {
      this.userToken = token
    },
    setUserId(id: string) {
      this.userId = id
    },
    setBearerToken(token: string) {
      this.userBearerToken = `Bearer ${token}`
    },
    setUser(User: User|null): void {
      this.user = User
    },
    logout() {
      this.userToken = ''
      this.userId = ''
      this.userBearerToken = ''
    }
  }
})
