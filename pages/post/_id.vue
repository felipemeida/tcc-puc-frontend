<template>
  <div>
    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            {{ post.category.name }}
          </h3>
          <div class="blog-post">
            <h2 class="blog-post-title">{{ post.title }}</h2>
            <p class="blog-post-meta">{{ post.user.name }}</p>
            <p v-html="post.article"></p>
          </div>
        </div><!-- /.blog-main -->
        <aside class="col-md-4 blog-sidebar">
          <div class="p-3 mb-3 bg-light rounded">
            <h4 class="font-italic">{{ post.user.name }}</h4>
            <p class="mb-0">Atua com social mídia desde bla chuta escreve algo render para completar mais de uma linha
              com algum texto que possa fazer sentido</p>
            <img class="img-fluid"
                 :src="baseFile + post.user.photo"
                 :alt="'Foto de ' + post.user.name"/>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Contato</h4>
            <ol class="list-unstyled">
              <li><a :href="post.user.instagram">Instagram</a></li>
              <li><a :href="post.user.facebook">Facebook</a></li>
              <li><a :href="post.user.linkedin">Linkedin</a></li>
              <li><a :href="post.user.twitter">Twitter</a></li>
            </ol>
          </div>
        </aside><!-- /.blog-sidebar -->
      </div><!-- /.row -->
    </main>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  head() {
    return {
      title: 'Seja bem-vindo'
    }
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('posts/fetchPost', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
  },
  data() {
    return {
      baseFile: process.env.baseUrlFile,
    };
  },
  computed: mapState({
    post: state => state.posts.post.data
  })
}
</script>
<style></style>
