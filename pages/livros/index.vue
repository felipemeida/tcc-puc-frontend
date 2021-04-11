<template>
  <div>
    <book-list :books="books"></book-list>
  </div>
</template>

<script>
import {mapState} from "vuex";
import CardBook from '~/components/books/CardBook'
import BookList from "@/components/books/BookList";

export default {
  head() {
    return {
      title: 'Seja bem-vindo'
    }
  },
  async fetch({store, error}) {
    try {
      await store.dispatch('books/fetchBooks')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
  },
  computed: mapState({
    books: state => state.books.books
  }),
  components: {
    CardBook,
    BookList
  }
}
</script>

<style scoped>

</style>
