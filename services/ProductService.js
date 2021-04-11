import {apiClient} from "@/services/Service";

export default {
  getProducts() {
    return apiClient.get('/products')
  },
  getProductsByPage(page) {
    return apiClient.get('/products?page=' + page)
  },
  getProduct(id) {
    return apiClient.get('/product/' + id)
  }
}
