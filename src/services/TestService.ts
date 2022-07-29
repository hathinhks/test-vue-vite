import axios from '@/plugins/axios'
import qs from 'qs'

class TestService {
  url = 'users'

  async getUsers(query: Record<string, unknown> = {}) {
    return await axios.get(this.url, {
      params: query,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'indices' })
      },
    })
  }
}

export default new TestService()