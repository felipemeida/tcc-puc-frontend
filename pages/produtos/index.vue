<template>
  <div>
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="product in products.data">
        <card-product :product="product" :key="i"></card-product>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/products/CardProduct";
import {mapState} from "vuex";

export default {
  name: "index.vue",
  components: {
    CardProduct
  },
  async fetch({store, error}) {
    try {
      await store.dispatch('product/fetchProducts')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch products at this time. Please try again.'
      })
    }
  },
  computed: mapState({
    products: state => state.product.products
  }),
}
</script>

<style scoped>

</style>
