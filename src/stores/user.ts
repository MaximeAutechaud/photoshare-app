import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // for data that is not yet loaded
      userToken: '',
      userId: '',
      userBearerToken: '',
    }
  },
  getters: {
    getUserId(): string {
      return this.userId
    },
    getUser(state) {
      return state
    },
    getBearerToken(): string {
      return this.userBearerToken
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
    logout() {
      this.userToken = ''
      this.userId = ''
    }
  }
})
