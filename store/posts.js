import PostService from '@/services/PostService.js'
export const state = () => ({
  posts: [],
  post: {}
})
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  }
}
export const actions = {
  fetchPosts({ commit }) {
    return PostService.getPosts().then(response => {
      commit('SET_POSTS', response.data)
    })
  },
  fetchPostsByPage({ commit }, page) {
    return PostService.getPostsByPage(page).then(response => {
      commit('SET_POSTS', response.data)
    })
  },
  fetchPost({ commit }, id) {
    return PostService.getPost(id).then(response => {
      commit('SET_POST', response.data)
    })
  }
}
