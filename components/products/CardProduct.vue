<template>
  <div class="col mb-4">
    <div class="card">
      <img :src="product.photo" class="card-img-top" :alt="'Produto' + product.name ">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}  <small class="text-muted">{{ product.brand }}</small></h5>
<!--        {{ product.quantity }}-->
        <p class="card-text">{{ product.description }}</p>
        <p>
          <category-badge :category="product.category" class="float-left"></category-badge>
          <span class="float-right">R$ {{ product.price.toFixed(2) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBadge from "@/components/items/CategoryBadge";

export default {
  name: "CardProduct",
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  components: {
    CategoryBadge
  }
}
</script>

<style scoped>

</style>
