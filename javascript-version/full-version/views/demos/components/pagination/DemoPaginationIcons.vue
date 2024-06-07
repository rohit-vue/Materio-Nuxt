<script setup>
const currentPage = ref(1)
</script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="ri-arrow-left-s-fill"
    next-icon="ri-arrow-right-s-fill"
  />
</template>
