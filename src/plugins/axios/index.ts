import axios from 'axios'
import router from '@/router'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

const appAxios = axios.create({
  baseURL: import.meta.env.VITE_JSON_PLACEHOLDER_URL || '',
  timeout: 10000,
})

appAxios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    console.log(JSON.stringify(error))

    // Network error and the like
    if (!error.response || !error.response.status) {
      return Promise.reject(error.toString())
    }

    if ([401, 455].includes(error.response.status)) {
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    }

    if (error.response.status === 500) {
      return Promise.reject('Server Error')
    }

    return Promise.reject(error.response.data)
  }
)

export default appAxios
