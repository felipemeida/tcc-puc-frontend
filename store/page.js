import PageService from '@/services/PageService.js'
export const state = () => ({
  pages: [],
})
export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages.data;
  },
}
export const actions = {
  fetchPages({ commit }) {
    return PageService.getPages().then(response => {
      commit('SET_PAGES', response.data)
    })
  },
}
