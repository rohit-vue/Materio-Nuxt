<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
  />
</template>
