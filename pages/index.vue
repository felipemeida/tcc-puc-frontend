<template>
  <div>
    <section>
      <h2 class="mt-4 mb-3">Reflexões<small class="text-muted"> buscando auto-conhecimento</small></h2>
      <div class="row mb-2">
        <div v-for="post in posts.data.slice(0, 8)" class="col-md-12 col-lg-6">
          <card-post :post="post"></card-post>
        </div>
      </div>
    </section>
    <section>
      <h2 class="mt-4 mb-3">Livros<small class="text-muted"> disponíveis para empréstimo</small></h2>
      <div class="row">
        <div v-for="book in books.data.slice(0, 8)" class="col-sm-12 col-md-6" style="max-width: 540px;">
          <card-book :book="book"></card-book>
        </div>
      </div>
    </section>
    <section>
      <h2 class="mt-4 mb-3">Produtos<small class="text-muted"> compre algo com preço camarada</small></h2>
      <div class="row row-cols-1 row-cols-md-2">
        <div v-for="product in products.data.slice(0, 8)" class="col-sm-6 col-md-4 col-lg-3">
          <card-product :product="product"></card-product>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex";
import CardPost from '~/components/posts/CardPost'
import CardProduct from '~/components/products/CardProduct'
import CardBook from "~/components/books/CardBook";

export default {
  head() {
    return {
      title: 'Seja bem-vindo'
    }
  },
  async fetch({store, error}) {
    try {
      await store.dispatch('posts/fetchPosts');
      await store.dispatch('product/fetchProducts');
      await store.dispatch('books/fetchBooks');
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
  },
  computed: mapState({
    posts: state => state.posts.posts,
    products: state => state.product.products,
    books: state => state.books.books,
  }),
  components: {
    CardPost,
    CardProduct,
    CardBook,
  }
}
</script>

<style>

</style>
