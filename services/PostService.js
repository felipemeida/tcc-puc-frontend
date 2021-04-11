import {apiClient} from "@/services/Service";

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
  getPostsByPage(page) {
    return apiClient.get('/posts?page=' + page)
  },
  getPost(id) {
    return apiClient.get('/post/' + id)
  }
}
