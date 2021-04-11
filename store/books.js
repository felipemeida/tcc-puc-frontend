import BookService from '@/services/BookService.js'
export const state = () => ({
  books: [],
  book: {}
})
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books
  },
  SET_BOOK(state, book) {
    state.book = book
  }
}
export const actions = {
  fetchBooks({ commit }) {
    return BookService.getBooks().then(response => {
      commit('SET_BOOKS', response.data)
    })
  },
  fetchBooksByPage({ commit }, page) {
    return BookService.getBooksByPage(page).then(response => {
      commit('SET_BOOKS', response.data)
    })
  },
  fetchBook({ commit }, id) {
    return BookService.getBook(id).then(response => {
      commit('SET_BOOK', response.data)
    })
  }
}
