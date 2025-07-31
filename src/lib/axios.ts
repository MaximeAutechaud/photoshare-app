import axios from 'axios'
import { useAuthStore } from '@/stores/auth.ts'

const api= axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

api.interceptors.request.use((config) => {
  const auth = useAuthStore()
  const bearerToken = auth.getBearerToken
  if (bearerToken) {
    config.headers.Authorization = bearerToken
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default api
