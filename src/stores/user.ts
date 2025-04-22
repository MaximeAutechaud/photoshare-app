import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // for data that is not yet loaded
      userToken: '',
      userId: ''
    }
  },
  getters: {
    getUserId(): string {
      return this.userId
    },
    getUser(state) {
      return state
    }
  },
  actions: {
    setToken(token: string) {
      this.userToken = token
    },
    setUserId(id: string) {
      this.userId = id
    },
    logout() {
      this.userToken = ''
      this.userId = ''
    }
  }
})
