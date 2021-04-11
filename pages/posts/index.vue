<template>
  <div>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import {mapState} from "vuex";
import CardPost from '~/components/posts/CardPost'
import PostList from "@/components/posts/PostList";

export default {
  head() {
    return {
      title: 'Seja bem-vindo'
    }
  },
  async fetch({store, error}) {
    try {
      await store.dispatch('posts/fetchPosts')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
  },
  computed: mapState({
    posts: state => state.posts.posts
  }),
  components: {
    CardPost,
    PostList
  }
}
</script>

<style scoped>

</style>
