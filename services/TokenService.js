import {apiClient} from "@/services/Service";

export default {
  getToken() {
    return apiClient.post('/oauth/token', {
      'grant_type': 'password',
      'client_id': 2,
      'client_secret': '9Zx8zyg5j4BoBLeejNCoAmXaCHIMsHhn2biqqrTh',
      'username': 'api@api.com',
      'password': 'looplooplooplooplooploop',
      'scope': ''
    })
  },
}
