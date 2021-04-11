import {apiClient} from "@/services/Service";

export default {
  getBooks() {
    return apiClient.get('/books')
  },
  getBooksByPage(page) {
    return apiClient.get('/books?page=' + page)
  },
  getBook(id) {
    return apiClient.get('/book/' + id)
  }
}
