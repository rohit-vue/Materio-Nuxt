<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
