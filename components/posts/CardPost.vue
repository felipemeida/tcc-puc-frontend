<template>
  <div class="card flex-md-row mb-4 h-md-250">
    <div class="card-body d-flex flex-column align-items-start">
      <strong class="d-inline-block mb-2 text-primary">{{ post['category_id'] }}</strong>
      <h3 class="mb-0">
        <NuxtLink class="text-dark" :to="'/post/'+post.id">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <div class="mb-1 text-muted">{{ post['user_id'] }}</div>
      <p class="card-text mb-auto">{{
          post['article'].substr(0, 120) | strippedContent
        }}{{ post['article'].length > 120 ? '...' : '' }}</p>
      <p class="w-100 d-flex">
        <NuxtLink :to="'/post/'+post.id">Continue lendo</NuxtLink>
        <category-badge :category="post.category" class="ml-auto d-block"></category-badge>
        <span></span>
      </p>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block"
         :src="baseFile + post.photo"
         alt="Capa do post">
  </div>
</template>

<script>
import CategoryBadge from "@/components/items/CategoryBadge";
export default {
  name: "CardPost",
  props: {
    post:{
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      baseFile: process.env.baseUrlFile,
    };
  },
  filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/ig, " ");
    }
  },
  components: {
    CategoryBadge
  }
}
</script>

<style scoped>

</style>
