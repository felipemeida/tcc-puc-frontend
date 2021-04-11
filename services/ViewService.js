import {apiClient} from "@/services/Service";

export default {
  logPages(link) {
    return apiClient.post('/page/view', {
      link
    });
  },
}
