<template>
  <div>
    <div class="row mb-2">
      <div v-for="post in posts.data" class="col-md-6">
        <card-post :post="post"></card-post>
      </div>
    </div>
    <nav class="blog-pagination">
      <NuxtLink
        v-for="(link, key) in posts.meta.links"
        v-if="link.url !== null"
        class="btn px-2 m-1"
        :to="'/posts/' + processUrl(link.url)"
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
import CardPost from "@/components/posts/CardPost";

export default {
  name: "PostList",
  props: {
    posts: {
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
    CardPost
  }
}
</script>

<style scoped>

</style>
