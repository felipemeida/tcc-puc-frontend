<template>
  <div class="card h-md-250 mb-4">
    <div class="row g-0">
      <div class="col-md-6 overflow-hidden">
        <img class="card-image card-img-left" :src="baseFile + book.photo" alt="Capa do livro">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h3 class="card-title">{{ book.title }} <small>{{ book.author }}</small></h3>
          <p class="card-text mb-auto">{{ book.description }}</p>
          <category-badge :category="book.category" class="ml-auto mt-auto"></category-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBadge from "@/components/items/CategoryBadge";

export default {
  name: "CardBook",
  props: {
    book: {
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      baseFile: process.env.baseUrlFile,
    };
  },
  components: {
    CategoryBadge
  }
}
</script>

<style scoped>
.card-image {
  object-fit: cover;
  width: auto;
  height: 250px;
}

.card-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
