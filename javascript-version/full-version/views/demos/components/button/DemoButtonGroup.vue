<script setup>
const toggleExclusive = ref(1)
</script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="compact"
  >
    <VBtn icon="ri-align-left" />
    <VBtn icon="ri-align-center" />
    <VBtn icon="ri-align-right" />
    <VBtn icon="ri-align-justify" />
  </VBtnToggle>
</template>
