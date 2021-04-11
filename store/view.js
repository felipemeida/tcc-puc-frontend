import ViewService from '@/services/ViewService.js'

export const actions = {
  LogPage({}, link) {
    ViewService.logPages(link).then(() => true);
  },
}
