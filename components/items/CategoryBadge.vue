<template>
  <span class="badge" :style="{ backgroundColor: category.color }">{{ category.name }}</span>
</template>

<script>
export default {
  name: "CategoryBadge",
  props: {
    category: {
      required: true,
      type: Object
    },
  }
}
</script>

<style scoped>
.badge {
  height: fit-content;
  width: fit-content;
}
</style>
