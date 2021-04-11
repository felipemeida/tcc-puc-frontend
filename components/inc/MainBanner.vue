<template>
  <div class="jumbotron p-3 p-md-5 text-white rounded background-image">
    <div class="col-md-6 px-0">
      <h1 class="display-4 font-italic">{{ pages[0].value }}</h1>
      <p class="lead my-3">{{ pages[1].value }}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: mapState({
    pages: state => state.page.pages,
  }),
}
</script>

<style scoped>
.background-image {
  background: url('~assets/img/background-main.jpeg');
}
</style>
