import {apiClient} from "@/services/Service";

export default {
  getPages() {
    return apiClient.get('/pages');
  },
}
