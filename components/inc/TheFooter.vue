<template>
  <footer class="blog-footer">
    <p v-html="pages[2].value"></p>
    <p>
      <a href="#">Voltar ao topo</a>
    </p>
  </footer>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: mapState({
    pages: state => state.page.pages,
  }),
}
</script>
