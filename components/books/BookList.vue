<template>
  <div>
    <div class="row mb-2">
      <div v-for="book in books.data" class="col-md-6">
        <card-book :book="book"></card-book>
      </div>
    </div>
    <nav class="blog-pagination">
      <NuxtLink
        v-for="(link, key) in books.meta.links"
        v-if="link.url !== null"
        class="btn px-2 m-1"
        :to="'/livros/' + processUrl(link.url)"
        :class="{
          'btn-outline-primary': !link.active,
          'btn-outline-secondary': link.active,
        }"
        v-html="link.label"
        :key="key"
      ></NuxtLink>
      <a class=" " href="#"></a>
      <a class=" " href="#"></a>
    </nav>
  </div>
</template>

<script>
import CardBook from "~/components/books/CardBook";

export default {
  name: "BookList",
  props: {
    books: {
      required: true,
      type: Object
    }
  },
  methods: {
    processUrl(url) {
      if (url) {
        let position = url.indexOf("page=");
        return url.slice(position + 5, url.length);
      }
    }
  },
  components: {
    CardBook
  }
}
</script>

<style scoped>

</style>
